import {create} from "zustand";

interface LoginStore {
  fullname: string;
  email: string;
  password: string;
  birthDate: string;
  gender: string;
  height: number;
  weight: number;
  setFullname: (fullname: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setBirthDate: (birthDate: string) => void;
  setGender: (gender: string) => void;
  setHeight: (height: number) => void;
  setWeight: (weight: number) => void;
}

// Initial state for the store
const initialLoginState: LoginStore = {
  fullname: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "",
  height: 0,
  weight: 0,
  setFullname: () => {},
  setEmail: () => {},
  setPassword: () => {},
  setBirthDate: () => {},
  setGender: () => {},
  setHeight: () => {},
  setWeight: () => {},
};

// Create the Zustand store
const useInputRegisterStore = create<LoginStore>((set) => ({
  ...initialLoginState,
  setFullname: (fullname) => set({ fullname }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setBirthDate: (birthDate) => set({ birthDate }),
  setGender: (gender) => set({ gender }),
  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
}));

export default useInputRegisterStore;
