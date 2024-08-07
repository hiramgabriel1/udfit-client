import { create } from "zustand";

type IThemePreferences = {
    dark: boolean;
    light: boolean;
    setDarkMode: () => void;
    setLightMode: () => void;
};

const ThemePreferencesStore = create<IThemePreferences>((set) => ({
    dark: false,
    light: true,
    setDarkMode: () => set({ dark: true }),
    setLightMode: () => set({ light: true }),
}));

export default ThemePreferencesStore;
