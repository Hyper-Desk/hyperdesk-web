import axios from "axios";
import Cookies from "js-cookie";

export const instance = axios.create({
  baseURL: "https://go.choish.shop/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(async (response) => {
  if (response.status === 403) {
    const refreshToken = Cookies.get("refreshToken");

    if (refreshToken) {
      try {
        const { data } = await axios.post(
          "https://go.choish.shop/api/user/refresh",
          {
            refreshToken,
          },
        );
        Cookies.set("accessToken", data.accessToken);
        return instance.request(response.config);
      } catch (error) {
        console.error(error);
        return response;
      }
    }
  }

  return response;
});
