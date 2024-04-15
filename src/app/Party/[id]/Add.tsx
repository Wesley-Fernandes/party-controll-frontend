"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { addGuest } from "./add-guest";
import { guestStore } from "@/store/add-guest";

export function Add() {
	const { id }:{id: string} = useParams();
	const inputREF = useRef<HTMLInputElement | null>(null);
	const {newGuest} = guestStore()

	const submit = () =>{
		addGuest({ id, inputREF, newGuest})
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className="px-2">
					<Plus />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Adicionar convidado</DialogTitle>
					<DialogDescription>
						Para adicionar um novo convidado, basta colocar o nome dele.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Input
							id="name"
							ref={inputREF}
							placeholder="Joe Doe"
							className="col-span-4"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button
						type="submit"
						onClick={submit}
					>
						Adicionar
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
