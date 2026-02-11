'use client';

import css from './CarList.module.css';
import CarListItem from '../CarListItem/CarListItem';
import { ListItemSkeleton } from '../ListItemSkeleton/ListItemSkeleton';
import { Car } from '@/types/car';

interface CarListProps {
  carList: Car[];
  isLoading: boolean;
}

const CarList = ({ carList, isLoading }: CarListProps) => {
  const skeletons = Array.from({ length: 12 });

  return (
    <>
      <ul className={css.carsList}>
        {isLoading && carList.length === 0
          ? skeletons.map((_, index) => (
              <li key={index}>
                <ListItemSkeleton />
              </li>
            ))
          : carList.map(car => <CarListItem key={car.id} item={car} />)}
      </ul>
    </>
  );
};

export default CarList;
