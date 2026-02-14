import { Metadata } from 'next';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import CatalogClient from './Catalog.client';
import { getCarsServer } from '@/lib/api/serverApi';

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

const Catalog = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['cars', 1, '', '', '', ''],
    queryFn: () => getCarsServer(1, 12),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
};

export default Catalog;
