import Guest from "@/components/Guest";
import { guestStore } from "@/store/add-guest";
import React from "react";

export default function Filtered() {

	const {guestFiltered} = guestStore()
	return (
		<>
			{guestFiltered.map((i) => (
				<Guest key={i.id} {...i} />
			))}
		</>
	);
}
