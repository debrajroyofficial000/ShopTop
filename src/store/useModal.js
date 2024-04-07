import { create } from "zustand";

const useModal = create((set, get) => ({
  cartToggle: false,
  toggleModal: () => {
    set({ cartToggle: !get().cartToggle });
  },
}));

export default useModal;
