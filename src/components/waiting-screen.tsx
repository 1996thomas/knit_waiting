"use client";

import { useState } from "react";

import { NewsletterForm } from "@/components/newsletter-form";
import { defaultLocale, Locale, translations } from "@/lib/translations";

const LOCALE_STORAGE_KEY = "waiting-knit-locale";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M16.98 2H7.02A5.03 5.03 0 0 0 2 7.02v9.96A5.03 5.03 0 0 0 7.02 22h9.96A5.03 5.03 0 0 0 22 16.98V7.02A5.03 5.03 0 0 0 16.98 2Zm3.34 14.98a3.35 3.35 0 0 1-3.34 3.34H7.02a3.35 3.35 0 0 1-3.34-3.34V7.02a3.35 3.35 0 0 1 3.34-3.34h9.96a3.35 3.35 0 0 1 3.34 3.34v9.96Zm-8.32-9.6A4.62 4.62 0 1 0 16.62 12 4.62 4.62 0 0 0 12 7.38Zm0 7.56A2.94 2.94 0 1 1 14.94 12 2.94 2.94 0 0 1 12 14.94Zm5.9-7.7a1.08 1.08 0 1 1-1.08-1.08 1.08 1.08 0 0 1 1.08 1.08Z" />
    </svg>
  );
}

function TiktokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M16.62 2h-3.13v12.64a2.93 2.93 0 1 1-2.93-2.93c.26 0 .52.03.76.1V8.63a6.07 6.07 0 1 0 5.3 6.01V8.12A8.56 8.56 0 0 0 21.53 9V5.87a5.45 5.45 0 0 1-4.91-3.87Z" />
    </svg>
  );
}

export function WaitingScreen() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return defaultLocale;
    }

    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return storedLocale === "fr" ? "fr" : "en";
  });
  const t = translations[locale];

  function updateLocale(nextLocale: Locale) {
    setLocale(nextLocale);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/poster.png"
        className="absolute inset-0 h-full w-full object-cover opacity-45 saturate-[0.9]"
      >
        <source src="/images/desktop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/60 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,0.06),transparent_35%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-20">
        <section className="w-full max-w-xl border border-zinc-300/30 bg-black/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.7)] backdrop-blur-[2px] sm:p-9">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-400">
              {t.brandLine}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => updateLocale("en")}
                className={`border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] transition ${
                  locale === "en"
                    ? "border-white bg-white text-black"
                    : "border-zinc-600 bg-transparent text-zinc-300 hover:border-zinc-300 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => updateLocale("fr")}
                className={`border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] transition ${
                  locale === "fr"
                    ? "border-white bg-white text-black"
                    : "border-zinc-600 bg-transparent text-zinc-300 hover:border-zinc-300 hover:text-white"
                }`}
              >
                FR
              </button>
            </div>
          </div>
          <div className="mb-2 border-b border-zinc-500/35 pb-4">
            <p className="text-2xl font-black uppercase tracking-[0.06em] text-white sm:text-3xl">
              99Knit
            </p>
          </div>
          <h1 className="mb-4 mt-2 text-3xl font-black uppercase leading-[1.05] tracking-[0.01em] text-zinc-100 sm:text-5xl">
            {t.title}
          </h1>
          <p className="mb-8 max-w-lg text-sm leading-relaxed text-zinc-300 sm:text-base">
            {t.description}
          </p>
          <NewsletterForm locale={locale} />
          <footer className="mt-8 border-t border-zinc-500/35 pt-5">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
              {t.footerFollow}
            </p>
            <div className="flex items-center gap-2 text-sm">
              <a
                href="https://www.instagram.com/99knit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.instagramLabel}
                title={t.instagramLabel}
                className="inline-flex h-10 w-10 items-center justify-center border border-zinc-500/60 bg-black text-zinc-300 transition hover:border-zinc-200 hover:text-white"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.tiktok.com/@99knit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.tiktokLabel}
                title={t.tiktokLabel}
                className="inline-flex h-10 w-10 items-center justify-center border border-zinc-500/60 bg-black text-zinc-300 transition hover:border-zinc-200 hover:text-white"
              >
                <TiktokIcon />
              </a>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
