export type AuthForm = {
  login: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
};
