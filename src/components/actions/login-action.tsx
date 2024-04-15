"use client";
import { userStore } from "@/store/user";
import axios from "axios";
import { Link } from "lucide-react";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import z from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const schema = z.object({
	email: z.object({
		value: z.string().email(),
	}),
	password: z.object({
		value: z.string().min(6).max(20),
	}),
});

const responseSchema = z.object({
	token: z.string(),
	picture: z.string(),
	name: z.string(),
});

export function LoginComponent() {
	const router = useRouter().push;
	const { setUser } = userStore();

	const tryLogin = async (formulary: FormEvent) => {
		formulary.preventDefault();

		const target = formulary.target as typeof formulary.target & {
			email: { value: string };
			password: { value: string };
		};

		try {
			const { email, password } = schema.parse(target);

			const archive = {
				email: email.value,
				password: password.value,
			};

			const response = await axios.post( `${process.env.NEXT_PUBLIC_API_ROUTE}/user/login`,
				archive,
			);
			const data = response.data;

			setUser(data);
			setTimeout(() => {
				router("/Party");
			}, 1000);
		} catch (err) {
			console.error(err);
			return false;
		}
	};

	return (
		<form
			className="flex flex-col gap-2 py-8 px-2 h-screen w-full sm:w-96 bg-primary-foreground"
			onSubmit={tryLogin}
			method="POST"
		>
			<h1 className="font-bold text-3xl text-center">Party Controll</h1>
			<div>
				<Label htmlFor="email">E-mail:</Label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="email@email.com"
					required
				/>
			</div>
			<div>
				<Label htmlFor="password">Senha:</Label>
				<Input
					id="password"
					name="password"
					type="password"
					placeholder="********"
					min={6}
					required
				/>
			</div>
			<hr />
			<Button type="submit">Login</Button>
			<small className="justify-center flex gap-0.5">
				Não têm conta?
				<Link href="" className="text-blue-600">
					Crie agora!
				</Link>
			</small>
		</form>
	);
}
