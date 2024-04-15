import { create } from "zustand";

interface userType {
	name: string;
	token: string;
	picture: string;
}

interface props {
	user: userType | null;
	setUser: (data: userType) => void;
	removeUser: () => void;
}

export const userStore = create<props>((set) => ({
	user: null,
	setUser: (newUser) => set((state) => ({ user: newUser })),
	removeUser: () => set({ user: null }),
}));
