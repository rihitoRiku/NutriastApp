import { create } from "zustand";

interface LoginStore {
    email: string,
    password: string,
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
}

const useInputLoginStore = create<LoginStore>((set) => ({
    email: '',
    password: '',
    setEmail: (email: string) => set({email: email}),
    setPassword: (password: string) => set({password: password}),
}));

export default useInputLoginStore;