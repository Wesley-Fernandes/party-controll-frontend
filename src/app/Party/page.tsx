"use client";
import type { PartyType } from "@/@types/party.types";
import {
	Table,
	TableBody,
	TableCaption,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import PartyComponent from "./PartyComponent";
import { receive } from "./receive";

export default function page() {
	const [partys, setPartys] = useState<PartyType[]>([]);

	useEffect(() => {
		receive({ setPartys });
	}, []);
	return (
		<main>
			<Table>
				<TableCaption>A list of your recent invoices.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="hidden sm:table-cell">Data</TableHead>
						<TableHead>Condominio</TableHead>
						<TableHead>Apt</TableHead>
						<TableHead className="hidden sm:table-cell">Status</TableHead>
						<TableHead></TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{partys.map((party) => (
						<PartyComponent {...party} key={party.id} />
					))}
				</TableBody>
			</Table>
		</main>
	);
}
