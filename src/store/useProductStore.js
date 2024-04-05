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
      getFilteredFootwears: (searched) => {
        set({
          filteredFootwears: get().footwears.filter((footwear) =>
            footwear.name.toLowerCase().includes(searched.toLowerCase())
          ),
        });
      },

      addViewedProduct: (prod) => {
        set({ viewedProduct: prod });
      },
    }),
    {
      name: "viewed-product",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ viewedProduct: state.viewedProduct }),
    }
  )
);

export default useProductStore;
