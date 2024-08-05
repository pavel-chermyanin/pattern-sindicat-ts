import { useMutation } from "@tanstack/react-query";

import { login } from "./authForm.service.ts";
import { AuthForm, AuthResponse } from "../model/authForm.types.ts";

export const useLoginMutation = () => {
  return useMutation<AuthResponse, Error, AuthForm>({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Login successful:", data);

      localStorage.setItem("accessToken", data.accessToken);
    },
    onError: (error) => {
      console.error("Login error:", error);
    },
  });
};
