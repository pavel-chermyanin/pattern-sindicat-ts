import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {ReportState} from "./report.types.ts";



export const useReportStore = create<ReportState>()(
  devtools(
    (set) => ({
      filters: {},
      setFilters: (filter) =>
        set({ filters: filter }, false, "report/setFilters"),

    }),
    { name: "report", store: "report" },
  )
);
