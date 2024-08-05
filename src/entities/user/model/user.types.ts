export type User = {
  isAuth: boolean;
  first_name: string;
  role: string;
};

export type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
};
