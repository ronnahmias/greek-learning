export const ELauderYears = {
  "2023-2024": "2023-2024",
  "2024-2025": "2024-2025",
} as const;

export type ELauderYear = keyof typeof ELauderYears;
