import { useGraphStore } from "./graph.store.ts";
import shallow from "zustand/shallow";

export const useGraphActions = () => {
  const { openGraphDrawer, setOpenGraphDrawer, activeGraph, setActiveGraph } = useGraphStore(
    (state) => ({
      openGraphDrawer: state.openGraphDrawer,
      setOpenGraphDrawer: state.setOpenGraphDrawer,
      activeGraph: state.activeGraph,
      setActiveGraph: state.setActiveGraph,
    }),
    shallow // Использование shallow для поверхностного сравнения
  );

  return { openGraphDrawer, setOpenGraphDrawer, activeGraph, setActiveGraph };
};