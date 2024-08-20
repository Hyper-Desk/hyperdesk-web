import { BASE_URL } from "@/lib/constants";
import axios from "axios";

export async function loginRequest(id: string, password: string) {
  try {
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
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data.message || error.message);
    }
  }
}
