'use client';

import { getCars } from '@/lib/api';
import { useCarListStore } from '@/store/useCarListStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import FilterBar from '../components/FilterBar/FilterBar';
import CarList from '../components/CarList/CarList';
import css from './page.module.css';
import { Car, Filters } from '@/types/car';

export default function CatalogClient() {
  const { filters, setFilters, resetFilters } = useCarListStore();

  const [page, setPage] = useState(1);
  const [allCars, setAllCars] = useState<Car[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    resetFilters();
    setAllCars([]);
    setPage(1);
  }, [resetFilters]);

  const { data, isFetching } = useQuery({
    queryKey: ['cars', page, filters],
    queryFn: () => getCars(page, 12, filters),
    placeholderData: previousData => previousData,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (data) {
      setTotalPages(data.totalPages);

      if (page === 1) {
        setAllCars(data.cars);
      } else {
        setAllCars(prev => {
          const newCars = data.cars.filter(newCar => !prev.some(oldCar => oldCar.id === newCar.id));
          return [...prev, ...newCars];
        });
      }
    }
  }, [data, page]);

  const handleSearch = (newFilters: Filters) => {
    setPage(1);
    setFilters(newFilters);
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(prev => prev + 1);
    }
  };

  const hasCars = allCars.length > 0;

  return (
    <div className={css.container}>
      <FilterBar onSearch={handleSearch} />

      {isFetching || hasCars ? (
        <CarList carList={allCars} isLoading={isFetching} />
      ) : (
        !isFetching && <p className={css.noCarsFound}>No cars found. Try different filters.</p>
      )}

      {hasCars && page < totalPages && (
        <button
          className={css.loadMoreBtn}
          onClick={handleLoadMore}
          disabled={isFetching}
          type="button"
        >
          {isFetching ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>
  );
}
