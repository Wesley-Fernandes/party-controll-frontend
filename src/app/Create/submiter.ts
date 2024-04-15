import { useInfo } from "@/hook/user-info";
import { API } from "@/lib/API";
import type { FormEvent } from "react";

export const submitter = async (e: FormEvent) => {
	e.preventDefault();
	const target = e.target as typeof e.target & {
		condominum: { value: string };
		apt: { value: string };
		start: { value: Date };
		end: { value: Date };
	};

	const data = {
		condominum: target.condominum.value,
		apt: target.apt.value,
		start: target.start.value + ":00.451Z",
		end: target.end.value + ":00.451Z",
	};

	await API.post("/party", data, {
		headers: {
			authorization: useInfo()?.token,
		},
	})
		.then((result) => {
			console.log(result.data);
		})
		.catch((error) => {
			console.error(error);
		});
};
