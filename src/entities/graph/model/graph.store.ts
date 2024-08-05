import { create } from "zustand";

import { GraphState } from "./graph.types.ts";
import {devtools} from "zustand/middleware";

export const useGraphStore = create<GraphState>()(
  devtools(
    (set) => ({
      openGraphDrawer: false,
      setOpenGraphDrawer: (bool) =>
        set({ openGraphDrawer: bool }, false, "graph/setOpenGraphDrawer"),

      activeGraph: null,
      setActiveGraph: (graph) =>
        set({ activeGraph: graph }, false, "graph/setActiveGraph"),
    }),
    { name: "graphStore",store:'graph'},
  )
);