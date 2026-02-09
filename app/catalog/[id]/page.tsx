import { getSingleCar } from '@/lib/api';
import css from './CarDetails.module.css';
import Image from 'next/image';
import { Icon } from '@/app/components/Icon/Icon';
import BookCarForm from '@/app/components/BookCarForm/BookCarForm';
import { CopyId } from '@/app/components/CopyId/CopyId';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const car = await getSingleCar(id);

  if (!car) {
    return { title: 'Car Not Found' };
  }

  const description = `Rent ${car.brand} ${car.model} ${car.year} for $${car.rentalPrice} per hour. Rental Car - best prices, top models, and instant booking.`;

  return {
    title: `${car.brand} ${car.model} | Rental Car`,
    description: description,
    openGraph: {
      title: `${car.brand} ${car.model} | Rental Car`,
      description: description,
      url: `https://rentalcar.app/catalog/${id}`,
      images: [car.img || '/picture.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${car.brand} ${car.model} | Rental Car`,
      description: description,
      images: [car.img || '/picture.jpg'],
    },
  };
}

const CarDetails = async ({ params }: Props) => {
  const { id } = await params;
  const car = await getSingleCar(id);

  const splitAddress = car.address.split(', ');
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
          fetchPriority="high"
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
