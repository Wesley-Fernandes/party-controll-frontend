import { Button } from "@/components/ui/button";
import { CalendarClock, Plus, RefreshCcw, Trash } from "lucide-react";
import { filterData, SearchType } from "filter-data";
import React, { MutableRefObject } from "react";
import { ReturnButton } from "./returnButton";
import { Input } from "@/components/ui/input";

interface ItemType {
  id: string;
  name: string;
  arrive: Date | null;
  exit: Date | null;
  updater: string;
}

interface props {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  setFiltered: (value: ItemType[]) => void;
  list: ItemType[];
}
export default function HeaderParty({ inputRef, setFiltered, list }: props) {
  const handleFilter = () => {
    if (!inputRef.current) return;
    const searchConditions = [
      {
        key: "name",
        value: inputRef.current.value,
        type: SearchType.LK,
      },
    ];
    const result: ItemType[] = filterData(list, searchConditions);
    setFiltered(result);
  };
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
          ref={inputRef}
          onChange={handleFilter}
        />
        <Button variant="outline" className="px-2">
          <RefreshCcw />
        </Button>
        <Button variant="outline" className="px-2">
          <Plus />
        </Button>
      </div>
    </header>
  );
}
