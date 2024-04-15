"use client"
import Guest from "@/components/Guest";
import React from "react";
import { guestStore } from "@/store/add-guest";

export default function List() {

	const {guests} = guestStore()
	return (
		<>
			{guests.map((i) => (
				<Guest key={i.id} {...i} />
			))}
		</>
	);
}
