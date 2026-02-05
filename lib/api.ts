import axios from 'axios';

export type Car = {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
};

export type CarsListResponse = {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
};

const apiNext = axios.create({
  baseURL: 'https://car-rental-api.goit.global',
});

export const getCars = async (
  page: number = 1,
  limit: number = 12,
  filters = {}
): Promise<CarsListResponse> => {
  const res = await apiNext.get<CarsListResponse>('/cars', {
    params: {
      page,
      limit,
      ...filters,
    },
  });
  return res.data;
};

export type BrandsResponse = string[];

export const getBrands = async (): Promise<BrandsResponse> => {
  const res = await apiNext.get<BrandsResponse>('/brands');
  return res.data;
};

export const getSingleCar = async (id: string) => {
  const res = await apiNext.get<Car>(`/cars/${id}`);
  return res.data;
};
