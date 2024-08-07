import { create } from "zustand";

interface IAuthState {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    token: string | null
}

const useAuthStore = create<IAuthState>((set) => ({
    isAuthenticated: false,
    token: null,
    login: () => set({ isAuthenticated: true }),
    logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;
