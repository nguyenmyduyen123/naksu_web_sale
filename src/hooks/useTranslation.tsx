"use client";
import { useLocale } from "@/contexts/LocaleContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Translation {
  [key: string]: string;
}
export default function useTranslation() {
  const { locale } = useLocale();
  const [translations, setTranslations] = useState<Translation>({});

  useEffect(() => {
    async function fetchTranslations() {
      const response = await fetch(`/locales/${locale}.json`);
      const data = await response.json();

      setTranslations(data);
    }

    fetchTranslations();
  }, [locale]);

  const t = (key: string) => {
    return translations[key] || key;
  };

  return { t };
}
