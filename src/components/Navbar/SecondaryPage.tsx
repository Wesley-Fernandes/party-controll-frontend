import React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ThemeChanger from "./ThemeChanger";

export default function SecondaryPage() {
  const { back } = useRouter();
  return (
    <ul className="flex gap-2">
      <li>
        <ThemeChanger />
      </li>
      <li>
        <Button onClick={back} className="px-2" variant="outline">
          <ArrowLeft />
        </Button>
      </li>
    </ul>
  );
}
