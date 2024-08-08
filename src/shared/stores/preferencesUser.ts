import { create } from "zustand";

type IThemePreferences = {
  themeMode: boolean;
  setDarkMode: () => void;
  setLightMode: () => void;
};

const ThemePreferencesStore = create<IThemePreferences>((set) => ({
  themeMode: false,
  setDarkMode: () => set({ themeMode: true }),
  setLightMode: () => set({ themeMode: true }),
}));

export default ThemePreferencesStore;
