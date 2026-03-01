import { create } from "zustand";

const useStore = create((set) => ({
    config: false,
    toggle: () => set((state) => ({ config: !state.config})),
}));

export default useStore;
