import { BASE_URL } from "@/lib/constant";
import axios from "axios";

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
