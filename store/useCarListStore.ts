import { create } from 'zustand';
import { Filters } from '@/types/car';

type CarListStore = {
  filters: Filters;
  setFilters: (filters: Filters) => void;
  resetFilters: () => void;
};

export const useCarListStore = create<CarListStore>()(set => ({
  filters: { brand: '', rentalPrice: '', minMileage: '', maxMileage: '' },

  setFilters: newFilters => set({ filters: newFilters }),

  resetFilters: () => {
    set({ filters: { brand: '', rentalPrice: '', minMileage: '', maxMileage: '' } });
  },
}));
