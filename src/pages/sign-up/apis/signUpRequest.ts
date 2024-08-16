import { BASE_URL } from "@/lib/constants";
import axios from "axios";

export async function signUpRequest(id: string, password: string) {
  const { data } = await axios.post(
    `${BASE_URL}/user/signup`,
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
