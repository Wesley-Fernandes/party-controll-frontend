"use client";
import type { PartyType } from "@/@types/party.types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { receiveById } from "./receive";
import { guestStore } from "@/store/add-guest";

import HeaderParty from "./HeaderParty";
import ListData from "./ListData";

export default function page() {
	const [data, setData] = useState<PartyType | null>(null);
	const { setGuest } = guestStore()
	const { id }: {id: string} = useParams();

	useEffect(() => {
		receiveById({ id, setData, setGuest});
	}, []);

	return (
		<main>
			<HeaderParty />
			<ListData />
		</main>
	);
}
