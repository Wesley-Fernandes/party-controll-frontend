"use client";
import { useRef, useState } from "react";
import HeaderParty from "./HeaderParty";
import ListData from "./ListData";

interface props {
  id: string;
  name: string;
  arrive: Date | null;
  exit: Date | null;
  updater: string;
}
export default function page() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [filtered, setFiltered] = useState<props[]>([]);

  const list = [
    {
      id: "1",
      name: "João Moises",
      arrive: new Date("2024-04-11T18:00:00"),
      exit: new Date("2024-04-11T22:00:00"),
      updater: "Wesley Fernandes",
    },
    {
      id: "2",
      name: "Maria Eduarda",
      arrive: new Date("2024-04-11T19:00:00"),
      exit: new Date("2024-04-11T23:00:00"),
      updater: "Jessica Fernandes",
    },
    {
      id: "3",
      name: "Pedro Augusto",
      arrive: new Date("2024-04-11T20:00:00"),
      exit: null,
      updater: "Wesley Fernandes",
    },
  ];

  return (
    <main>
      <HeaderParty inputRef={inputRef} list={list} setFiltered={setFiltered} />
      <ListData filtered={filtered} inputRef={inputRef} list={list} />
    </main>
  );
}
