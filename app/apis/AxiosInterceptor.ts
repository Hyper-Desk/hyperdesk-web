import { BASE_URL } from "@/lib/constant";
import axios from "axios";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default function AxiosInterceptor({ children }: Props) {
  useEffect(() => {
    const responseInterceptor = instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    const requestInterceptor = instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    return () => {
      instance.interceptors.response.eject(responseInterceptor);
      instance.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  return children;
}
