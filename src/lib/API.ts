import { useInfo } from "@/hook/user-info";
import axios from "axios";

export const API = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_ROUTE,
	timeout: 10000,
	headers: {
		authorization: useInfo()?.token,
	},
});
