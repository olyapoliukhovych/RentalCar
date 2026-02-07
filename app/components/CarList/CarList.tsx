'use client';

import css from './CarList.module.css';
import CarListItem from '../CarListItem/CarListItem';
import { useCarListStore } from '@/store/useCarListStore';
import { useEffect } from 'react';
import { ListItemSkeleton } from '../ListItemSkeleton/ListItemSkeleton';

const CarList = () => {
  const { cars, page, totalPages, isLoading, isSearchPerformed, fetchCars } = useCarListStore();

  useEffect(() => {
    if (cars.length === 0) {
      fetchCars(true);
    }
  }, [fetchCars, cars.length]);

  const handleClick = () => fetchCars(false);

  const skeletons = Array.from({ length: 12 });

  if (isSearchPerformed && !isLoading && cars.length === 0) {
    return <p className={css.noCarsFound}>No cars found. Try adjusting your filters.</p>;
  }

  return (
    <>
      <ul className={css.carsList}>
        {isLoading && cars.length === 0
          ? skeletons.map((_, index) => <ListItemSkeleton key={index} />) /* loader */
          : cars.map(car => <CarListItem key={car.id} item={car} />)}
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
    </>
  );
};

export default CarList;
