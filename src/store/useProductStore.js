import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";
const useProductStore = create(
  persist(
    (set, get) => ({
      footwears: [],
      isLoading: true,
      isError: false,
      filteredFootwears: [],
      viewedProduct: {},
      getFootwears: async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          if (data) set({ footwears: data, isLoading: false, isError: false });
        } catch (error) {
          set({ isLoading: false, isError: true });
        }
      },
      getSearchedFootwears: (searched) => {
        set({
          filteredFootwears: get().footwears.filter((footwear) =>
            footwear.name.toLowerCase().includes(searched.toLowerCase())
          ),
        });
      },
      addViewedProduct: (prod) => {
        set({ viewedProduct: prod });
      },
      addMaxPriceFilter: (maxPrice) => {
        set((prev) => ({
          filteredFootwears: prev.filteredFootwears.filter(
            (footwear) => footwear.price <= maxPrice
          ),
        }));
      },
      addRatingFilter: (rating) => {
        if (rating > 0) {
          set((prev) => ({
            filteredFootwears: prev.filteredFootwears.filter(
              (footwear) => parseInt(footwear.rating) === rating
            ),
          }));
        }
      },
      addColorFilter: (color) => {
        set((prev) => ({
          filteredFootwears: prev.filteredFootwears.filter(
            (footwear) => footwear.color.toLowerCase() === color.toLowerCase()
          ),
        }));
      },
      resetFilter: () => {
        set({ filteredFootwears: get().footwears });
      },
    }),
    {
      name: "product-store",
      partialize: (state) => ({
        viewedProduct: state.viewedProduct,
        filteredFootwears: state.filteredFootwears,
      }),
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProductStore;
