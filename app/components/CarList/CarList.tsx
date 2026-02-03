import css from './CarList.module.css';
import { Car } from '@/lib/api';
import CarListItem from '../CarListItem/CarListItem';

type CarListProps = {
  cars: Car[];
};

const CarList = async ({ cars }: CarListProps) => {
  return (
    <ul className={css.carsList}>
      {cars.map(car => (
        <CarListItem key={car.id} item={car} />
      ))}
    </ul>
  );
};

export default CarList;
