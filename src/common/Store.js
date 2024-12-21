import { create } from "zustand";
import { persist } from "zustand/middleware";

export const themeStore = create(
  persist((set) => ({
    theme: "light",
    toggle: (prevState) =>
      set((state) => ({
        ...prevState,
        theme: state.theme === "dark" ? "light" : "dark",
      })),
  }))
);
