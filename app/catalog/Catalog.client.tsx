'use client';

import { getCars } from '@/lib/api';
import { useCarListStore } from '@/store/useCarListStore';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import FilterBar from '../components/FilterBar/FilterBar';
import CarList from '../components/CarList/CarList';
import css from './page.module.css';
import { Car, Filters } from '@/types/car';

export default function CatalogClient() {
  const { filters, setFilters } = useCarListStore();
  const [page, setPage] = useState(1);
  const [allCars, setAllCars] = useState<Car[]>([]);

  const { data, isLoading, isFetching } = useQuery({
    queryKey: [
      'cars',
      page,
      filters.brand,
      filters.rentalPrice,
      filters.minMileage,
      filters.maxMileage,
    ],
    queryFn: () => getCars(page, 12, filters),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });

  useEffect(() => {
    if (data?.cars) {
      if (page === 1) {
        setAllCars(data.cars);
      } else {
        setAllCars(prev => [...prev, ...data.cars]);
      }
    }
  }, [data, page]);

  const handleSearch = (newFilters: Filters) => {
    setPage(1);
    setFilters(newFilters);
    setAllCars([]);
  };

  const hasCars = allCars.length > 0;
  const isLastPage = data ? page >= data.totalPages : false;

  return (
    <div className={css.container}>
      <FilterBar onSearch={handleSearch} />

      {hasCars ? (
        <CarList carList={allCars} isLoading={isLoading} />
      ) : (
        !isLoading && <p className={css.noCarsFound}>No cars found.</p>
      )}

      {hasCars && !isLastPage && (
        <button
          className={css.loadMoreBtn}
          onClick={() => setPage(prev => prev + 1)}
          disabled={isFetching}
          type="button"
        >
          {isFetching ? 'Loading...' : 'Load more'}
        </button>
      )}
    </div>
  );
}
