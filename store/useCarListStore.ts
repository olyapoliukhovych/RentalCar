import { create } from 'zustand';
import { Car, getCars } from '@/lib/api';

// interface Filters {
//   brand: string;
//   rentalPrice: string;
//   minMileage: number;
//   maxMileage: number;
// }

type CarListStore = {
  cars: Car[];
  page: number;
  totalPages: number;
  isLoading: boolean;
  //   filters: Filters;
  filters: { brand: string; rentalPrice: string };
  setBrand: (brand: string) => void;
  setPrice: (rentalPrice: string) => void;
  resetFilters: () => void;
  fetchCars: (isNewSearch: boolean) => Promise<void>;
};

export const useCarListStore = create<CarListStore>()((set, get) => ({
  cars: [],
  page: 1,
  totalPages: 1,
  isLoading: false,
  filters: { brand: '', rentalPrice: '' },

  setBrand: brand => {
    set(state => ({
      filters: { ...state.filters, brand },
    }));
  },

  setPrice: price => {
    set(state => ({
      filters: { ...state.filters, rentalPrice: price },
    }));
  },

  resetFilters: () => {
    set({ filters: { brand: '', rentalPrice: '' } });
    get().fetchCars(true);
  },

  fetchCars: async (isNewSearch = false) => {
    set({ isLoading: true });

    const currentPage = isNewSearch ? 1 : get().page;
    const currentFilters = get().filters;

    try {
      const data = await getCars(currentPage, 12, currentFilters);

      set(state => ({
        cars: isNewSearch ? data.cars : [...state.cars, ...data.cars],
        page: state.page + 1,
        // page: data.page + 1,
        totalPages: data.totalPages,
      }));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
