import { create } from "zustand";
const useCartStore = create((set) => ({
  footwears: [],
  isLoading: true,
  isError: false,
  getFootwears: async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) set({ footwears: data, isLoading: false, isError: false });
    } catch (error) {
      set({ isLoading: false, isError: true });
    }
  },
}));

export default useCartStore;
