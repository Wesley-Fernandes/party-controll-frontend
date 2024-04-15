"use client";

import { useInfo } from "@/hook/user-info";
import { useLogout } from "@/hook/user-logout";
import { userStore } from "@/store/user";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function UserImage() {
	const data = useInfo();
	const { push } = useRouter();

	if (!data) {
		useLogout();
		push("/");
	}

	return (
		<Avatar>
			<AvatarImage src={data?.picture} />
			<AvatarFallback>{data?.name[0]}</AvatarFallback>
		</Avatar>
	);
}
