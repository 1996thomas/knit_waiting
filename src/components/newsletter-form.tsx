"use client";

import { FormEvent, useState } from "react";

import { Locale, translations } from "@/lib/translations";

type NewsletterFormProps = {
  locale: Locale;
};

export function NewsletterForm({ locale }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const t = translations[locale];

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, locale }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? t.genericError);
        return;
      }

      setStatus("success");
      setMessage(data.message ?? t.successMessage);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(t.networkError);
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-3">
      <label
        htmlFor="email"
        className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-300"
      >
        {t.emailLabel}
      </label>
      <div className="flex flex-col gap-2 sm:items-stretch">
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t.emailPlaceholder}
          required
          autoComplete="email"
          className="h-12 w-full border border-white text-white px-5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-black transition disabled:cursor-not-allowed disabled:opacity-70 sm:h-12 sm:w-auto sm:tracking-[0.12em]"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="h-12 w-full border border-white bg-white px-5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-70 sm:h-12 sm:w-auto sm:tracking-[0.12em]"
        >
          {status === "loading" ? t.submitting : t.submit}
        </button>
      </div>
      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
