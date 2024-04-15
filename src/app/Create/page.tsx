"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitter } from "./submiter";

export default function page() {
	return (
		<div className="screen flex-col flex items-center justify-center">
			<Card className="p-3 flex flex-col items-center justify-center w-fit">
				<h1 className="font-bold text-3xl uppercase mb-4 text-blue-500">
					Criar festa
				</h1>
				<form className="flex flex-col gap-2 px-2" onSubmit={submitter}>
					<Label htmlFor="condominum">Condominio</Label>
					<Input
						name="condominum"
						type="text"
						id="condominum"
						placeholder="Alta vista"
					/>
					<Label htmlFor="apt">Apt/lote</Label>
					<Input name="apt" type="text" id="apt" placeholder="C1102" />
					<Label htmlFor="start">Começo</Label>
					<Input name="start" type="datetime-local" id="start" />
					<Label htmlFor="end">Fim</Label>
					<Input name="end" type="datetime-local" id="end" />
					<hr />
					<Button>Criar festa</Button>
				</form>
			</Card>
		</div>
	);
}
