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

export const getCars = async (page: number = 1, limit: number = 12): Promise<CarsListResponse> => {
  const res = await apiNext.get<CarsListResponse>('/cars', {
    params: {
      page,
      limit,
    },
  });
  return res.data;
};
