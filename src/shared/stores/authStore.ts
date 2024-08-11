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
    login: (token: string) => {
        console.log(token);
        
        set({ isAuthenticated: true, token })
        localStorage.setItem('authToken', token)
    },
    logout: () => {
        set({ isAuthenticated: false, token: null })
        localStorage.removeItem('authToken' )
    },
}));

export const loginUserToStore = (token: string) => {
    console.log(token);
    
    useAuthStore.getState().login(token)
}
export const logoutUserFromStore = () => useAuthStore.getState().logout()

export default useAuthStore;
