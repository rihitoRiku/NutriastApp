import { create } from "zustand";

interface UserDataStore {
  userId: string;
  email: string;
  username: string;
  gender: string;
  height: number;
  weight: number;
  fat: number;
  calory: number;
  fiber: number;
  carbohidrate: number;
  protein: number;

  setEmail: (email: string) => void;
  setUserId: (userId: string) => void;
  setUsername: (username: string) => void;
  setGender: (gender: string) => void;
  setHeight: (height: number) => void;
  setWeight: (weight: number) => void;
  setFat: (fat: number) => void;
  setCalory: (calory: number) => void;
  setFiber: (fiber: number) => void;
  setCarbohidrate: (carbohidrate: number) => void;
  setProtein: (protein: number) => void;
}

const useUserDataStore = create<UserDataStore>((set) => ({
  userId: "",
  email: "",
  username: "",
  gender: "",
  height: 0,
  weight: 0,
  fat: 0,
  calory: 0,
  fiber: 0,
  carbohidrate: 0,
  protein: 0,

  setEmail: (email: string) => set({ email }),
  setUserId: (userId: string) => set({ userId }),
  setUsername: (username: string) => set({ username }),
  setGender: (gender: string) => set({ gender }),
  setHeight: (height: number) => set({ height }),
  setWeight: (weight: number) => set({ weight }),
  setFat: (fat: number) => set({ fat }),
  setCalory: (calory: number) => set({ calory }),
  setFiber: (fiber: number) => set({ fiber }),
  setCarbohidrate: (carbohidrate: number) => set({ carbohidrate }),
  setProtein: (protein: number) => set({ protein }),
}));

export default useUserDataStore;
