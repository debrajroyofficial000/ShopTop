import { create } from "zustand";
const useCartStore = create((set, get) => ({
  footwears: [],
  isLoading: true,
  isError: false,
  filteredFootwears: [],
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
}));

export default useCartStore;
