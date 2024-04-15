import Filtered from "./Filtered";
import List from "./List";
import { guestStore } from "@/store/add-guest";


export default function ListData() {
	const {guestFiltered} = guestStore()
	return (
		<ul className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
			{guestFiltered.length > 0 && <Filtered />}
			{guestFiltered.length == 0 && <List/>}
		</ul>
	);
}
