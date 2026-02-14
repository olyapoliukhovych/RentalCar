import axios from 'axios';
import { Car } from '@/types/car';

export type CarsListResponse = {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
};

const clientApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getCarsClient = async (
  page = 1,
  limit = 12,
  filters = {}
): Promise<CarsListResponse> => {
  const { data } = await clientApi.get('/cars', { params: { page, limit, ...filters } });
  return data;
};

export type BrandsResponse = string[];

export const getBrandsClient = async (): Promise<BrandsResponse> => {
  const { data } = await clientApi.get<BrandsResponse>('/brands');
  return data;
};

export const getSingleCarClient = async (id: string): Promise<Car> => {
  const { data } = await clientApi.get(`/cars/${id}`);
  return data;
};
