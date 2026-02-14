import { Metadata } from 'next';
import CarDetailsClient from './CarDetails.client';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { getSingleCarServer } from '@/lib/api/serverApi';

export type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const car = await getSingleCarServer(id);

  if (!car) {
    return { title: 'Car Not Found' };
  }

  const description = `Rent ${car.brand} ${car.model} ${car.year} for $${car.rentalPrice} per hour.`;

  return {
    title: `${car.brand} ${car.model} | Rental Car`,
    description,
    openGraph: {
      title: `${car.brand} ${car.model} | Rental Car`,
      description,
      url: `https://rentalcar.app/catalog/${id}`,
      images: [car.img || '/picture.jpg'],
    },
  };
}

export default async function CarDetailsPage({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['car', id],
    queryFn: () => getSingleCarServer(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CarDetailsClient />
    </HydrationBoundary>
  );
}
