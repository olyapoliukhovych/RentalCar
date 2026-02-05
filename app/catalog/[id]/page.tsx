import { getSingleCar } from '@/lib/api';
import css from './CarDetails.module.css';
import Image from 'next/image';

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

  return (
    <div className={css.container}>
      <div className={css.contentL}>
        <Image
          src={car.img}
          width={640}
          height={512}
          alt={car.description}
          className={css.detailsCarImg}
        ></Image>
        {/* form */}
      </div>

      <div className={css.contentR}>
        <div className={css.mainDescription}>
          <h2 className={css.mainTitle}>
            {car.brand} {car.model}, {car.year}
          </h2>
          <p className={css.id}>Id: 2983</p>
          <p className={css.location}>
            {city}, {country} &nbsp; &nbsp; Mileage: {car.mileage.toLocaleString('uk-UA')} km
          </p>
          <p className={css.price}>${car.rentalPrice}</p>
          <p className={css.description}>{car.description}</p>
        </div>

        <div className={css.otherCarDetails}>
          <p className={css.listTitle}>Rental Conditions:</p>
          <ul className={css.carDetailsList}>
            {car.rentalConditions.map((con, index) => (
              <li key={index} className={css.listItem}>
                {con}
              </li>
            ))}
          </ul>

          <p className={css.listTitle}>Car Specifications:</p>
          <ul className={css.carDetailsList}>
            <li className={css.listItem}>Year: {car.year}</li>
            <li className={css.listItem}>
              Type: {car.type.charAt(0).toUpperCase() + car.type.slice(1).toLowerCase()}
            </li>
            <li className={css.listItem}>Fuel Consumption: {car.fuelConsumption}</li>
            <li className={css.listItem}>Engine Size: {car.engineSize}</li>
          </ul>

          <p className={css.listTitle}>Accessories and functionalities:</p>
          <ul className={css.carDetailsList}>
            {car.accessories.map((acc, index) => (
              <li key={index} className={css.listItem}>
                {acc}
              </li>
            ))}
            {car.functionalities.map((fun, index) => (
              <li key={index} className={css.listItem}>
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
