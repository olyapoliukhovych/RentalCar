'use client';

import Image from 'next/image';
import { Icon } from '@/app/components/Icon/Icon';
import BookCarForm from '@/app/components/BookCarForm/BookCarForm';
import { CopyId } from '@/app/components/CopyId/CopyId';
import { DetailsPageSkeleton } from '@/app/components/DetailsPageSkeleton/DetailsPageSkeleton';
import css from './CarDetails.module.css';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getSingleCar } from '@/lib/api';

export default function CarDetailsClient() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top
  }, []);

  const {
    data: car,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['car', id],
    queryFn: () => getSingleCar(id as string),
    refetchOnMount: false,
  });

  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }

  if (isLoading) return <DetailsPageSkeleton />;

  if (error || !car) {
    throw new Error('Car not found'); // let error.tsx handle it
  }

  const splitAddress = car.address.split(', ');
  const city = splitAddress[1];
  const country = splitAddress[2];

  const editedCity: Record<string, string> = { Kiev: 'Kyiv', Odessa: 'Odesa' };

  const ukrCity = editedCity[city] || city;

  return (
    <div className={css.container}>
      <div className={css.contentL}>
        <Image
          src={car.img}
          width={640}
          height={512}
          alt={car.brand}
          className={css.detailsCarImg}
          priority
          fetchPriority="high"
        />
        <BookCarForm />
      </div>

      <div className={css.contentR}>
        <div className={css.mainDescription}>
          <div className={css.mainTitleDiv}>
            <h2 className={css.mainTitle}>
              {car.brand} {car.model}, {car.year}
            </h2>
            <CopyId id={car.id} />
          </div>
          <div className={css.withIcon}>
            <Icon id="location" className={css.icon} />
            <p>
              {ukrCity}, {country} &nbsp; &nbsp; Mileage: {car.mileage.toLocaleString('uk-UA')} km
            </p>
          </div>
          <h2 className={css.price}>${car.rentalPrice}</h2>
          <p>{car.description}</p>
        </div>

        <div className={css.otherCarDetails}>
          <h3 className={css.listTitle}>Rental Conditions:</h3>
          <ul className={css.carDetailsList}>
            {car.rentalConditions.map((con, index) => (
              <li key={index} className={css.listItem}>
                <Icon id="check-circle" className={css.icon} />
                {con}
              </li>
            ))}
          </ul>

          <h3 className={css.listTitle}>Car Specifications:</h3>
          <ul className={css.carDetailsList}>
            <li className={css.listItem}>
              <Icon id="calendar" className={css.icon} /> Year: {car.year}
            </li>
            <li className={css.listItem}>
              <Icon id="car" className={css.icon} />
              Type: {car.type.charAt(0).toUpperCase() + car.type.slice(1).toLowerCase()}
            </li>
            <li className={css.listItem}>
              <Icon id="fuel-pump" className={css.icon} /> Fuel Consumption: {car.fuelConsumption}
            </li>
            <li className={css.listItem}>
              <Icon id="gear" className={css.icon} /> Engine Size: {car.engineSize}
            </li>
          </ul>

          <h3 className={css.listTitle}>Accessories and functionalities:</h3>
          <ul className={css.carDetailsList}>
            {[...car.accessories, ...car.functionalities].map((item, index) => (
              <li key={index} className={css.listItem}>
                <Icon id="check-circle" className={css.icon} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
