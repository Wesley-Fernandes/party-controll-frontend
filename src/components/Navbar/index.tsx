"use client";
import { usePathname } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import PrincipalPage from "./PrincipalPage";
import SecondaryPage from "./SecondaryPage";

export default function Navbar() {
  const path = usePathname();

  return (
    <>
      {path == "/" ? null : (
        <nav className="flex justify-between items-center px-2 h-12 border-b">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {path == "/Party" ? <PrincipalPage /> : <SecondaryPage />}
        </nav>
      )}
    </>
  );
}
