import { BASE_URL } from "@/lib/constants";
import axios from "axios";

export async function loginRequest(id: string, password: string) {
  const { data } = await axios.post(
    `${BASE_URL}/user/login`,
    {
      userId: id,
      password,
    },
    {
      withCredentials: true,
    },
  );

  return data;
}
