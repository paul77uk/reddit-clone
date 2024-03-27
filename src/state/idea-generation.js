import { create } from "zustand";

export const useGenerationStore = create((set) => ({
  openLoginModal: false,
  openSignUpModal: false,
  openLogoutModal: false,
  user: {},
  setOpenLoginModal: (openLoginModal) => set({ openLoginModal }),
  setOpenSignUpModal: (openSignUpModal) => set({ openSignUpModal }),
  setUser: (user) => set({ user }),
  setOpenLogoutModal: (openLogoutModal) => set({ openLogoutModal }),
}));
