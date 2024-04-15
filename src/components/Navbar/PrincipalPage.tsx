"use client";
import { useLogout } from "@/hook/user-logout";
import { FilePlus, LogOut, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import ThemeChanger from "./ThemeChanger";

export default function PrincipalPage() {
	const { push } = useRouter();

	const logout = () => {
		useLogout();
		push("/");
	};
	return (
		<ul className="flex gap-2">
			<li>
				<ThemeChanger />
			</li>
			<li>
				<Link
					className={buttonVariants({ variant: "outline" }) + " px-1"}
					title="Adicionar nova festa"
					href={"/Create"}
				>
					<FilePlus />
				</Link>
			</li>
			<li>
				<Button variant="outline" className="px-2" title="Procurar por data">
					<Search />
				</Button>
			</li>
			<li>
				<Button variant="destructive" className="px-2" onClick={logout}>
					<LogOut />
				</Button>
			</li>
		</ul>
	);
}
