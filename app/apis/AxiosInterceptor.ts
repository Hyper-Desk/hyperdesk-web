"use client";

import { BASE_URL } from "@/lib/constant";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export function AxiosInterceptor({ children }: Props) {
  const { data, update } = useSession();
  const router = useRouter();

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use(
      (config) => {
        if (!data?.user.accessToken) {
          router.replace("/login");
          return config;
        }
        config.headers.Authorization = `Bearer ${data.user.accessToken}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response?.status === 401) {
          if (!data?.user.refreshToken) {
            router.replace("/login");
            return Promise.reject(error);
          }
          try {
            const response = await fetch(`${BASE_URL}/user/refresh`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                refreshToken: data.user.refreshToken,
              }),
            });

            const responseData = await response.json();

            await update({
              user: {
                ...data.user,
                accessToken: responseData.accessToken,
              },
            });

            return instance.request(error.config);
          } catch (error) {
            router.replace("/login");
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [router, data, update]);

  return children;
}

export default instance;
