import { GuestType } from "@/@types/party.types";
import { API } from "@/lib/API";
import { revalidatePath } from "next/cache";
import type React from "react";
import { FormEvent } from "react";

interface props {
	id: string;
	inputREF: React.MutableRefObject<HTMLInputElement | null>;
	newGuest: (guest: GuestType) => void;
	
}
export async function addGuest({ inputREF, id, newGuest}: props) {
	const name = inputREF.current?.value;

	if (!name) return;

	await API.post(`/guest/${id}`, { name })
		.then(({data}) => {
			console.log(data)
			console.log("Adicionado com sucesso!");
			newGuest(data)
			return;
		})
		.catch((error) => {
			console.error(error);
			return;
		});
}
