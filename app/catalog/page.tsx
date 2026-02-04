'use client';

// import { useCarListStore } from '@/store/useCarListStore';
import CarList from '../components/CarList/CarList';
import FilterBar from '../components/FilterBar/FilterBar';
import css from './page.module.css';
// import { useEffect } from 'react';
// import { getCars } from '@/lib/api';

const Catalog = () => {
  // const response = await getCars();
  // const { cars, fetchCars, page, totalPages, isLoading } = useCarListStore();

  // useEffect(() => {
  //   fetchCars(true);
  // }, [fetchCars]);

  return (
    <div className={css.container}>
      <FilterBar />

      {/* {response.cars?.length > 0 && <CarList cars={response.cars} />} */}
      <CarList />
    </div>
  );
};

export default Catalog;
