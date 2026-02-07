import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface LikedState {
  liked: string[];
  toggleLike: (carId: string) => void;
  isLiked: (carId: string) => boolean;
}

export const useLikedStore = create<LikedState>()(
  persist(
    (set, get) => ({
      liked: [],

      toggleLike: carId => {
        const { liked } = get();
        const isLiked = liked.includes(carId);

        if (isLiked) {
          set({ liked: liked.filter(id => id !== carId) });
        } else {
          set({ liked: [...liked, carId] });
        }
      },

      isLiked: carId => get().liked.includes(carId),
    }),
    {
      name: 'liked-cars', // key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
