import { create } from "zustand";
import {ClientState} from "./client.types.ts";
import {devtools} from "zustand/middleware";

export const useClientStore = create<ClientState>()(
  devtools(
    (set) => ({
      activeClient: null,
      setActiveClient: (client) =>
        set({ activeClient: client }, false, "client/setActiveClient"),

    }),
    { name: "clientStore",store:"client" },
  )
);
