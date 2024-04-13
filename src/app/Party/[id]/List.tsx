import Guest from "@/components/Guest";
import React from "react";
interface ItemType {
  id: string;
  name: string;
  arrive: Date | null;
  exit: Date | null;
  updater: string;
}

interface props {
  data: ItemType[];
}
export default function List({ data }: props) {
  return (
    <>
      {data.map((i) => (
        <Guest key={i.id} {...i} />
      ))}
    </>
  );
}
