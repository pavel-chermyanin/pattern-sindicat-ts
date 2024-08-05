import {axiosLoginRequest} from "@shared/api/axiosClient.ts";

import { AuthForm, AuthResponse } from "../model/authForm.types.ts";



export const login = async (formData: AuthForm): Promise<AuthResponse> => {
  try {
    const response = await axiosLoginRequest.post<AuthResponse>(
      `auth/jwt/login`,
      formData,
    );
    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error("Login failed:", error);
    throw error;
  }
};
