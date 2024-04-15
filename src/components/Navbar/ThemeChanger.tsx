"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui/button";

export default function ThemeChanger() {
	const { setTheme, theme } = useTheme();

	const toogle = () => {
		switch (theme) {
			case "dark":
				setTheme("light");
				break;
			case "light":
				setTheme("dark");
				break;
		}
	};
	return (
		<Button variant="outline" size="icon" onClick={toogle}>
			{theme == "light" ? <Sun /> : <Moon />}
		</Button>
	);
}
