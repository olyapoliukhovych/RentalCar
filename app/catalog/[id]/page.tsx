import { getSingleCar } from '@/lib/api';
import css from './CarDetails.module.css';
import Image from 'next/image';
import { Icon } from '@/app/components/Icon/Icon';
import BookCarForm from '@/app/components/BookCarForm/BookCarForm';
import { CopyId } from '@/app/components/CopyId/CopyId';

type Props = {
  params: Promise<{ id: string }>;
};

const CarDetails = async ({ params }: Props) => {
  const { id } = await params;
  const car = await getSingleCar(id);

  const splitAddress = car.address.split(', ');
  //   const address = splitAddress[0]; // no need now
  const city = splitAddress[1];
  const country = splitAddress[2];

  const editedCity: Record<string, string> = {
    Kiev: 'Kyiv',
    Odessa: 'Odesa',
  };

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
        ></Image>
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
            <p className={css.location}>
              {ukrCity}, {country} &nbsp; &nbsp; Mileage: {car.mileage.toLocaleString('uk-UA')} km
            </p>
          </div>
          <h2 className={css.price}>${car.rentalPrice}</h2>
          <p className={css.description}>{car.description}</p>
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
              <Icon id="calendar" className={css.icon} />
              Year: {car.year}
            </li>
            <li className={css.listItem}>
              <Icon id="car" className={css.icon} />
              Type: {car.type.charAt(0).toUpperCase() + car.type.slice(1).toLowerCase()}
            </li>
            <li className={css.listItem}>
              <Icon id="fuel-pump" className={css.icon} />
              Fuel Consumption: {car.fuelConsumption}
            </li>
            <li className={css.listItem}>
              <Icon id="gear" className={css.icon} />
              Engine Size: {car.engineSize}
            </li>
          </ul>

          <h3 className={css.listTitle}>Accessories and functionalities:</h3>
          <ul className={css.carDetailsList}>
            {car.accessories.map((acc, index) => (
              <li key={index} className={css.listItem}>
                <Icon id="check-circle" className={css.icon} />
                {acc}
              </li>
            ))}
            {car.functionalities.map((fun, index) => (
              <li key={index} className={css.listItem}>
                <Icon id="check-circle" className={css.icon} />
                {fun}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
