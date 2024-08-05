import { useClientStore } from "./client.store.ts";
import shallow from "zustand/shallow";

export const useClientActions = () => {
  const { activeClient, setActiveClient } = useClientStore(
    (state) => ({
      activeClient: state.activeClient,
      setActiveClient: state.setActiveClient,
    }),
    shallow // Используем shallow для поверхностного сравнения
  );

  return { activeClient, setActiveClient };
};