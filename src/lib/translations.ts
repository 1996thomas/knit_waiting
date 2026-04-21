export type Locale = "en" | "fr";

export const defaultLocale: Locale = "en";

export type TranslationSet = {
  brandLine: string;
  newsletterHeading: string;
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
    newsletterHeading: "Join the newsletter",
    emailLabel: "Be the first to know about new collections and exclusive offers",
    emailPlaceholder: "you@email.com",
    submit: "Sign up",
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
    newsletterHeading: "Rejoignez la newsletter",
    emailLabel: "Sois parmi les premiers à découvrir les nouvelles collections et les offres exclusives.",
    emailPlaceholder: "ton@email.com",
    submit: "S'inscrire",
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
