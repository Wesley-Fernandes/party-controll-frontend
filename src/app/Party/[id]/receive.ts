import type { GuestType, PartyType } from "@/@types/party.types";
import { API } from "@/lib/API";

interface props {
	id: string;
	setData: (props: PartyType) => void;
	setGuest: (guests: GuestType[]) => void;
}
export async function receiveById({id, setData, setGuest}: props) {
	await API.get(`/party/${id}`)
		.then(({ data }) => {
			setData(data);
			setGuest(data.guests)
			console.log("REQUEST BY ID: ", data.guests)
			return;
		})
		.catch((error) => {
			console.error(error);
			return;
		});
}
