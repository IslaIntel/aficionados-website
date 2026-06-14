"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import { SectionReveal } from "./SectionReveal";

export function Contact() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    const mailto = `mailto:${t("emailInfo")}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-burgundy px-6 py-24 text-white lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr]">
        <SectionReveal>
          <p className="section-eyebrow mb-4 text-bronze-light">{t("eyebrow")}</p>
          <h2 className="section-title mb-6 text-4xl lg:text-5xl">{t("title")}</h2>
          <div className="luxury-divider mb-8 bg-gradient-to-r from-bronze-light to-transparent" />
          <p className="mb-10 max-w-md text-base leading-8 text-white/75">{t("description")}</p>

          <div className="space-y-5 text-sm">
            <div>
              <p className="mb-1 tracking-[0.18em] text-bronze-light uppercase">{t("findUs")}</p>
              <p className="text-white/85">{t("address")}</p>
            </div>
            <div>
              <p className="mb-1 tracking-[0.18em] text-bronze-light uppercase">{t("hours")}</p>
              <p className="text-white/85">{t("hoursValue")}</p>
            </div>
            <div className="space-y-2 pt-2">
              <a href={`tel:${t("phone")}`} className="block text-white/85 transition hover:text-bronze-light">
                {t("phone")}
              </a>
              <a href={`mailto:${t("emailInfo")}`} className="block text-white/85 transition hover:text-bronze-light">
                {t("emailInfo")}
              </a>
              <a href={`mailto:${t("emailSales")}`} className="block text-white/85 transition hover:text-bronze-light">
                {t("emailSales")}
              </a>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="border border-white/10 bg-charcoal/35 p-8 backdrop-blur-sm lg:p-10"
          >
            <div className="grid gap-5">
              <label className="block">
                <span className="mb-2 block text-[0.68rem] tracking-[0.2em] text-white/55 uppercase">
                  {t("form.name")}
                </span>
                <input
                  name="name"
                  required
                  className="w-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-bronze-light"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[0.68rem] tracking-[0.2em] text-white/55 uppercase">
                  {t("form.email")}
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-bronze-light"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[0.68rem] tracking-[0.2em] text-white/55 uppercase">
                  {t("form.subject")}
                </span>
                <input
                  name="subject"
                  required
                  className="w-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-bronze-light"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[0.68rem] tracking-[0.2em] text-white/55 uppercase">
                  {t("form.message")}
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-bronze-light"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 w-full border border-bronze/50 bg-bronze/20 px-8 py-3 text-[0.72rem] tracking-[0.24em] text-bronze-light uppercase transition hover:bg-bronze/30"
            >
              {t("form.submit")}
            </button>

            {submitted && (
              <p className="mt-4 text-sm text-bronze-light">{t("form.success")}</p>
            )}
          </form>

          <div className="mt-8 overflow-hidden border border-white/10">
            <iframe
              title="Aficionados location"
              src="https://maps.google.com/maps?q=39+Calle+Frances,+Guaynabo,+00934,+Puerto+Rico&output=embed"
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
