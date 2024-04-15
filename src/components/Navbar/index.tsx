"use client";
import { usePathname } from "next/navigation";
import PrincipalPage from "./PrincipalPage";
import SecondaryPage from "./SecondaryPage";
import { UserImage } from "./UserImage";

export default function Navbar() {
	const path = usePathname();

	return (
		<>
			{path == "/" ? null : (
				<nav className="flex justify-between items-center px-2 h-12 border-b">
					<UserImage />

					{path == "/Party" ? <PrincipalPage /> : <SecondaryPage />}
				</nav>
			)}
		</>
	);
}
