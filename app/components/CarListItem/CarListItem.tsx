import { Car } from '@/lib/api';
import Image from 'next/image';
import css from './CarListItem.module.css';

type CarListItemProps = {
  item: Car;
};

const CarListItem = ({ item }: CarListItemProps) => {
  const splitAddress = item.address.split(', ');
  //   const address = splitAddress[0]; // no need now
  const city = splitAddress[1];
  const country = splitAddress[2];

  return (
    <li className={css.carsLi}>
      <Image
        className={css.carImg}
        src={item.img}
        width={276}
        height={268}
        alt={item.description}
      ></Image>
      <div className={css.topTextPosition}>
        <p className={css.topText} title={`${item.brand} ${item.model}, ${item.year}`}>
          {item.brand} <span className={css.model}>{item.model}</span>, {item.year}
        </p>
        <p className={css.topText}>${item.rentalPrice}</p>
      </div>

      <p className={css.bottomTextOne}>
        {/* <span className={css.detailsSpanOne}>{item.address.split(', ').slice(-2).join(' ')}</span> */}
        <span className={css.detailsSpanOne}>{city}</span>
        <span className={css.detailsSpanOne}>{country}</span>
        <span className={css.detailsSpanOne}>{item.rentalCompany}</span>
      </p>
      <p className={css.bottomTextTwo}>
        <span className={css.detailsSpanTwo}>
          {item.type.charAt(0).toUpperCase() + item.type.slice(1).toLowerCase()}
        </span>
        <span className={css.detailsSpanTwo}>{item.mileage.toLocaleString('uk-UA')} km</span>
      </p>

      <button className={css.carsLiButton}>Read more</button>
    </li>
  );
};

export default CarListItem;
