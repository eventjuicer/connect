export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de", "pl"],
} as const;

export type Locale = (typeof i18n)["locales"][number];