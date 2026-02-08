'use client';

import { Metadata } from 'next';
import CarList from '../components/CarList/CarList';
import FilterBar from '../components/FilterBar/FilterBar';
import css from './page.module.css';

export const metadata: Metadata = {
  title: 'Catalog | Rental Car',
  description: 'Choose your perfect car from our wide selection. Best prices and instant booking.',
  openGraph: {
    title: 'Rental Car - Luxury | Premium | Adventure Car Rental',
    description: 'Rent your dream car in seconds. Best prices, top models, and instant booking.',
    url: 'https://rentalcar.app/catalog',
    images: ['/picture.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rental Car - Luxury | Premium | Adventure Car Rental',
    images: ['/picture.jpg'],
  },
};

const Catalog = () => {
  return (
    <div className={css.container}>
      <FilterBar />
      <CarList />
    </div>
  );
};

export default Catalog;
