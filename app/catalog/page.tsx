'use client';

import CarList from '../components/CarList/CarList';
import FilterBar from '../components/FilterBar/FilterBar';
import css from './page.module.css';

const Catalog = () => {
  return (
    <div className={css.container}>
      <FilterBar />
      <CarList />
    </div>
  );
};

export default Catalog;
