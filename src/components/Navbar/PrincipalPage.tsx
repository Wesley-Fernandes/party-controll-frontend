import { FilePlus, Search, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import ThemeChanger from "./ThemeChanger";

export default function PrincipalPage() {
  return (
    <ul className="flex gap-2">
      <li>
        <ThemeChanger />
      </li>
      <li>
        <Button variant="outline" className="px-2" title="Adicionar nova festa">
          <FilePlus />
        </Button>
      </li>
      <li>
        <Button variant="outline" className="px-2" title="Procurar por data">
          <Search />
        </Button>
      </li>
      <li>
        <Button variant="destructive" className="px-2">
          <LogOut />
        </Button>
      </li>
    </ul>
  );
}
