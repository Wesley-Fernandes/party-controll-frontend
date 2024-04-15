import type { PartyType } from "@/@types/party.types";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PartyComponent(props: PartyType) {
	const date = format(new Date(props.start), "dd/MM/yy");

	return (
		<TableRow>
			<TableCell className="font-medium hidden sm:table-cell">{date}</TableCell>
			<TableCell className="font-medium">{props.condominum}</TableCell>
			<TableCell className="font-bold">{props.apt}</TableCell>
			<TableCell className="font-medium hidden sm:table-cell">
				<Badge>ativo</Badge>
			</TableCell>
			<TableCell className="text-end">
				<Link
					className={buttonVariants({ variant: "outline" })}
					href={`/Party/${props.id}`}
				>
					<ArrowRight />
				</Link>
			</TableCell>
		</TableRow>
	);
}
