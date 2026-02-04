'use client';

import css from './CarList.module.css';
// import { Car } from '@/lib/api';
import CarListItem from '../CarListItem/CarListItem';
import { useCarListStore } from '@/store/useCarListStore';
import { useEffect } from 'react';

// type CarListProps = {
//   cars: Car[];
// };

const CarList = () => {
  const { cars, page, totalPages, isLoading, fetchCars } = useCarListStore();

  //   useEffect(() => {
  //     fetchCars(true);
  //   }, [fetchCars]);

  useEffect(() => {
    if (cars.length === 0) {
      fetchCars(true);
    }
  }, [fetchCars, cars.length]);

  const handleClick = () => fetchCars(false);

  return (
    <>
      <ul className={css.carsList}>
        {cars.map(car => (
          <CarListItem key={car.id} item={car} />
        ))}
      </ul>

      {page <= totalPages && cars.length > 0 && (
        <button
          className={css.loadMoreBtn}
          onClick={handleClick}
          disabled={isLoading}
          type="button"
        >
          {isLoading ? 'Loading...' : 'Load more'}
        </button>
      )}

      {isLoading && cars.length === 0 && <p>Loading...</p>}
    </>
  );
};

export default CarList;
