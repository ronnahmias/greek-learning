export const ELauderYears = {
  "2023-2024": "2023-2024",
  "2022-2023": "2022-2023",
  "2021-2022": "2021-2022",
} as const;

export type ELauderYear = keyof typeof ELauderYears;
