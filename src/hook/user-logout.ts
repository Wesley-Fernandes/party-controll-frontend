import { userStore } from "@/store/user";

export function useLogout() {
	userStore.getState().removeUser();
	return;
}
