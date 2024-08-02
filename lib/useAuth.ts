"use client";

import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/constant";

export const useAuth = () => {
  const { data: session, update } = useSession();

  const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const setUpInterceptorRequest = (session: Session) => {
    return instance.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${session.user.accessToken}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  };

  const setUpInterceptorResponse = () => {
    return instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const { response } = error;
        const originalRequest = error.config;

        if (!response || response.status !== 401 || originalRequest._retry) {
          return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {
          const { data } = await instance.post("/auth/refresh-token", {
            refreshToken: session!.user.refreshToken,
          });

          update({ accessToken: data.accessToken });
          originalRequest.headers.Authorization = `Bearer ${data.user.accessToken}`;

          return instance(originalRequest);
        } catch (error) {
          await signOut();
          return Promise.reject(error);
        }
      },
    );
  };

  useEffect(() => {
    const request = setUpInterceptorRequest(session!);
    const response = setUpInterceptorResponse();

    return () => {
      instance.interceptors.request.eject(request);
      instance.interceptors.response.eject(response);
    };
  }, [session]);

  return { instance };
};
