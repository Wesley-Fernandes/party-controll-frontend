"use client";

import { useEffect, useState } from "react";
import Theme from "./Theme";

interface props {
	children: React.ReactNode;
}
export default function Provider({ children }: props) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}
	return (
		<Theme attribute="class" defaultTheme="dark">
			{children}
		</Theme>
	);
}
