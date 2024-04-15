import { GuestType } from "@/@types/party.types";
import { create } from "zustand";
import { SearchType, filterData } from "filter-data";



interface props {
	guests:  GuestType[];
    guestFiltered: GuestType[]
    setGuest: (guests: GuestType[]) => void;
	newGuest: (guest: GuestType) => void;
	eraseGuest: () => void;
    filterGuest: (name:string) => void;
}

export const guestStore = create<props>((set) => ({
	guests: [],
    guestFiltered: [],
	newGuest: (guest) => set((state) => ({ guests: [...state.guests, guest] })),
    setGuest: (newGuests) => set((state) => ({ guests: newGuests })),
	eraseGuest: () => set({ guests: [] }),
    filterGuest: (name) => {
        switch (name!=""){
            case true:
                const searchConditions = [{
                        key: "name",
                        value: name,
                        type: SearchType.LK,
                }];

                const result = filterData(guestStore.getState().guests, searchConditions) as GuestType[]

                set({guestFiltered: result});
                break;
            case false:
                set({guestFiltered: []})
        }

    },

}));
