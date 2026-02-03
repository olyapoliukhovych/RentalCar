import { Car } from '@/lib/api';
import Image from 'next/image';
import css from './CarListItem.module.css';

type CarListItemProps = {
  item: Car;
};

const CarListItem = ({ item }: CarListItemProps) => {
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
        <p className={css.topText}>
          {item.brand} {item.model}, {item.year}
        </p>
        <p className={css.topText}>$ {item.rentalPrice}</p>
      </div>
      <p className={css.bottomText}>
        {item.address} | {item.rentalCompany} | {item.type} | {item.mileage}
      </p>

      <button className={css.carsLiButton}>Read more</button>
    </li>
  );
};

export default CarListItem;
