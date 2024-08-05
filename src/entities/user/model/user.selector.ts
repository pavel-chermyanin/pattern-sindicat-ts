import { useUserStore } from "./user.store.ts";

export const useUserActions = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  return { user, setUser };
};
