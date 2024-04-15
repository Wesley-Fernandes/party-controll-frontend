"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarClock, RefreshCcw, Trash } from "lucide-react";
import { Add } from "./Add";
import { guestStore } from "@/store/add-guest";
import { FormEvent } from "react";


export default function HeaderParty() {
	const {filterGuest} = guestStore()
	
	const filter = (e:FormEvent) =>{
		const target =  e.target as typeof e.target & {
			value: string
		}
		filterGuest(target.value)
	}
	return (
		<header className="flex flex-col items-center px-2 h-fit py-2  gap-2">
			<div className="flex justify-between w-full">
				<h1 className="uppercase font-bold">Alta Vista - C1201</h1>
				<span className="flex items-center gap-1 font-light text-xs">
					<CalendarClock size={18} />
					11/04/2024 ás 10:30
				</span>
			</div>
			<div className="flex justify-around w-full gap-2">
				<Button variant="destructive" className="px-2">
					<Trash />
				</Button>

				<Input
					placeholder="Filtrar por nome"
					name="filter-input"
					onChange={filter}
				/>
				<Add />
				<Button variant="outline" className="px-2">
					<RefreshCcw />
				</Button>
			</div>
		</header>
	);
}
