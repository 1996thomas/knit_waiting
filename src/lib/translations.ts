export type Locale = "en" | "fr";

export const defaultLocale: Locale = "en";

export type TranslationSet = {
  brandLine: string;
  badge: string;
  newsletterHeading: string;
  title: string;
  description: string;
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  submitting: string;
  genericError: string;
  networkError: string;
  successMessage: string;
  languageSwitchLabel: string;
  footerFollow: string;
  instagramLabel: string;
  tiktokLabel: string;
};

export const translations: Record<Locale, TranslationSet> = {
  en: {
    brandLine: "SHOP AND MAGAZINE FROM PARIS, FR",
    badge: "Coming soon",
    newsletterHeading: "Join the newsletter",
    title: "Knit is coming soon.",
    description:
      "Leave your email and be the first to know when the new version goes live.",
    emailLabel: "Get an email when we launch.",
    emailPlaceholder: "you@email.com",
    submit: "Subscribe to the newsletter",
    submitting: "Subscribing...",
    genericError: "Something went wrong.",
    networkError: "Unable to contact the server.",
    successMessage: "Subscription confirmed.",
    languageSwitchLabel: "Language",
    footerFollow: "Follow us",
    instagramLabel: "Instagram",
    tiktokLabel: "TikTok",
  },
  fr: {
    brandLine: "SHOP AND MAGAZINE FROM PARIS, FR",
    badge: "Bientot en ligne",
    newsletterHeading: "Rejoignez la newsletter",
    title: "Knit arrive bientot.",
    description:
      "Laisse ton email pour etre prevenu des que la nouvelle version est en ligne.",
    emailLabel: "Recois un mail des que le site est en ligne.",
    emailPlaceholder: "ton@email.com",
    submit: "S'abonner a la newsletter",
    submitting: "Inscription...",
    genericError: "Une erreur est survenue.",
    networkError: "Impossible de contacter le serveur.",
    successMessage: "Inscription confirmee.",
    languageSwitchLabel: "Langue",
    footerFollow: "Suis-nous",
    instagramLabel: "Instagram",
    tiktokLabel: "TikTok",
  },
};
