"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

enum E_Locale {
  EN = "en",
  VN = "vn",
}
interface LocaleContextType {
  locale: E_Locale;
  setLocale: React.Dispatch<React.SetStateAction<E_Locale>>;
}

const defaultLocaleContext: LocaleContextType = {
  locale: E_Locale.EN,
  setLocale: () => {}, // Dummy setter function
};

const LocaleContext = createContext<LocaleContextType>(defaultLocaleContext);

export const useLocale = () => useContext(LocaleContext);

type LocaleProviderProps = {
  children: ReactNode;
};

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState<E_Locale>(E_Locale.EN);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
