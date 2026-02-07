import Image from 'next/image';
import css from './CarListItem.module.css';
import Link from 'next/link';
import { Icon } from '../Icon/Icon';
import { useLikedStore } from '@/store/useLikedStore';
import { Car } from '@/types/car';

type CarListItemProps = {
  item: Car;
};

const CarListItem = ({ item }: CarListItemProps) => {
  const { toggleLike, liked } = useLikedStore();

  const isLiked = liked.includes(item.id);

  const splitAddress = item.address.split(', ');
  //   const address = splitAddress[0]; // no need now
  const city = splitAddress[1];
  const country = splitAddress[2];

  const editedCity: Record<string, string> = {
    Kiev: 'Kyiv',
    Odessa: 'Odesa',
  };

  const ukrCity = editedCity[city] || city;

  return (
    <li className={css.carsLi}>
      <Image
        className={css.carImg}
        src={item.img}
        width={276}
        height={268}
        alt={item.description}
      ></Image>
      <button className={css.likeButton} onClick={() => toggleLike(item.id)} type="button">
        <Icon id={isLiked ? 'heart-filled' : 'heart-empty'} className={css.heartIcon} />
      </button>
      <div className={css.topTextPosition}>
        <p className={css.topText} title={`${item.brand} ${item.model}, ${item.year}`}>
          {item.brand} <span className={css.model}>{item.model}</span>, {item.year}
        </p>
        <p className={css.topText}>${item.rentalPrice}</p>
      </div>

      <p className={css.bottomTextOne}>
        <span className={css.detailsSpanOne}>{ukrCity}</span>
        <span className={css.detailsSpanOne}>{country}</span>
        <span className={css.detailsSpanOne}>{item.rentalCompany}</span>
      </p>
      <p className={css.bottomTextTwo}>
        <span className={css.detailsSpanTwo}>
          {item.type.charAt(0).toUpperCase() + item.type.slice(1).toLowerCase()}
        </span>
        <span className={css.detailsSpanTwo}>{item.mileage.toLocaleString('uk-UA')} km</span>
      </p>

      <Link href={`/catalog/${item.id}`} className={css.carsLiButton}>
        Read more
      </Link>
    </li>
  );
};

export default CarListItem;
