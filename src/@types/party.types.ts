export interface GuestType {
	id: string;
	name: string;
	arrive: Date|null;
	exit: Date|null;
	updater: string|null;
}

export interface PartyType {
	apt: string;
	condominum: string;
	end: string; // Formato ISO 8601
	id: string;
	start: string; // Formato ISO 8601
	guests: GuestType[]|[];
}
