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
        set({
          footwears: get().footwears.filter(
            (footwear) => footwear.price <= maxPrice
          ),
        });
      },
      addRatingFilter: (rating) => {
        set({
          footwears: get().footwears.filter(
            (footwear) => parseInt(footwear.rating) === rating
          ),
        });
      },
      addColorFilter: (color) => {
        set({
          footwears: get().footwears.filter(
            (footwear) => footwear.color <= color
          ),
        });
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
/**set({
          filteredFootwears: get().filteredFootwears.filter(
            (footwear) => rating > 0 && parseInt(footwear.rating) === rating
          ),
        });
        set({
          filteredFootwears: get().filteredFootwears.filter(
            (footwear) => color !== "" && footwear.color <= color
          ),
        }); */
