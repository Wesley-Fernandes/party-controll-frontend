"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React from "react";

export default function Test() {
	async function getData() {
		await axios
			.get("http://localhost:3222/api/user/test")
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(JSON.stringify(error));
			});
	}
	return (
		<div>
			<Button onClick={getData}>Request</Button>
		</div>
	);
}
