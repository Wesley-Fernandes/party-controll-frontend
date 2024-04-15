import { userStore } from "@/store/user";

export const useInfo = () => {
	return userStore.getState().user;
};
