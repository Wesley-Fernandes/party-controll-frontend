import type { PartyType } from "@/@types/party.types";
import { API } from "@/lib/API";
import { formatDate } from "@/lib/formatDate";

interface props {
	setPartys: (props: PartyType[]) => void;
}
export async function receive({ setPartys }: props) {
	const today = new Date();
	const start = formatDate(today);
	await API.post("/party/all", { start })
		.then(({ data }) => {
			console.log(data);
			setPartys(data);
			return;
		})
		.catch((error) => {
			console.error(error);
			return;
		});
}
