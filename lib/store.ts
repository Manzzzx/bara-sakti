import { create } from 'zustand';

interface NavStore {
  isMobileNavOpen: boolean;
  setMobileNavOpen: (isOpen: boolean) => void;
}

export const useNavStore = create<NavStore>((set) => ({
  isMobileNavOpen: false,
  setMobileNavOpen: (isOpen) => set({ isMobileNavOpen: isOpen }),
})); 