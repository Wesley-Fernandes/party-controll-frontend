import React, { MutableRefObject } from "react";
import Filtered from "./Filtered";
import List from "./List";
interface ItemType {
  id: string;
  name: string;
  arrive: Date | null;
  exit: Date | null;
  updater: string;
}
interface props {
  inputRef: MutableRefObject<HTMLInputElement | null>;
  filtered: ItemType[];
  list: ItemType[];
}
export default function ListData({ inputRef, list, filtered }: props) {
  return (
    <ul className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {inputRef.current?.value ? (
        <Filtered data={filtered} />
      ) : (
        <List data={list} />
      )}
    </ul>
  );
}
