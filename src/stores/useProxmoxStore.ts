import { create } from "zustand";

type ProxmoxStore = {
  isTokenValid: boolean;
  setIsTokenValid: (isTokenValid: boolean) => void;
};

export const useProxmoxStore = create<ProxmoxStore>((set) => ({
  isTokenValid: false,
  setIsTokenValid: (isTokenValid: boolean) => set({ isTokenValid }),
}));
