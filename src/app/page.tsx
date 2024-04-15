import { LoginComponent } from "@/components/actions/login-action";

export default async function Home() {
	return (
		<main className="flex h-screen w-screen flex-col items-end justify-center background-wallpaper">
			<LoginComponent />
		</main>
	);
}
