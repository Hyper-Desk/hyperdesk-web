import { create } from "zustand";

type ProxmoxStore = {
  domain: string;
  setDomain: (domain: string) => void;
  port: string;
  setPort: (port: string) => void;
  userId: string;
  setUserId: (userId: string) => void;
  password: string;
  setPassword: (password: string) => void;
};

export const useProxmoxStore = create<ProxmoxStore>((set) => ({
  domain: "",
  setDomain: (domain: string) => set({ domain }),
  port: "",
  setPort: (port: string) => set({ port }),
  userId: "",
  setUserId: (userId: string) => set({ userId }),
  password: "",
  setPassword: (password: string) => set({ password }),
}));
