

export type ReportState = {
  filters: Record<string, string>;
  setFilters: (filters: Record<string, string>) => void;
}