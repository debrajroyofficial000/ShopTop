import { create } from "zustand";
const useCartStore = create((set, get) => ({
  cartFootwears: [],
  addCartFootwears: (data) => {
    set((prev) => ({
      cartFootwears: [...prev.cartFootwears, data],
    }));
  },
  incrementItemQty: (id) => {
    set({
      cartFootwears: get().cartFootwears.map((footwear) =>
        footwear.id === id ? { ...footwear, qty: footwear.qty + 1 } : footwear
      ),
    });
  },

  decrementItemQty: (id) => {
    const item = get().cartFootwears.find((footwear) => footwear.id === id);
    if (item.qty === 1) {
      set({
        cartFootwears: get().cartFootwears.filter(
          (footwear) => footwear.id !== item.id
        ),
      });
    } else {
      set({
        cartFootwears: get().cartFootwears.map((footwear) =>
          footwear.id === id ? { ...footwear, qty: footwear.qty - 1 } : footwear
        ),
      });
    }
  },
}));
export default useCartStore;
