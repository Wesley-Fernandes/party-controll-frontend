import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-end justify-center background-wallpaper">
      <form className="flex flex-col gap-2 py-8 px-2 h-screen w-full sm:w-96 bg-primary-foreground">
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
        <Button>Login</Button>
        <small className="justify-center flex gap-0.5">
          Não têm conta?
          <Link href="" className="text-blue-600">
            Crie agora!
          </Link>
        </small>
      </form>
    </main>
  );
}
