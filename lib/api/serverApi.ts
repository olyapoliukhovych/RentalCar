import axios from 'axios';
import { Car } from '@/types/car';
import { CarsListResponse } from './clientApi';

const serverApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getCarsServer = async (
  page = 1,
  limit = 12,
  filters = {}
): Promise<CarsListResponse> => {
  const { data } = await serverApi.get('/cars', { params: { page, limit, ...filters } });
  return data;
};

export const getSingleCarServer = async (id: string): Promise<Car> => {
  const { data } = await serverApi.get(`/cars/${id}`);
  return data;
};
