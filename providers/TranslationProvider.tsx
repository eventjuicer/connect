"use client"

import React from 'react';
import Polyglot from 'node-polyglot';

type TranslationProviderInput = {
  translations: any;
  children: React.ReactNode;
  locale: string;
}

export const TranslationProviderContext = React.createContext({});


const TranslationProvider =  ({ translations, locale, children }: TranslationProviderInput) => {


  const value = React.useMemo(()=>{

    const polyglot = new Polyglot({
      locale,
      phrases: translations[locale],
      onMissingKey: (key: string) => `? ${key}`
    });

    return {
      locale,
      translate: polyglot.t.bind(polyglot)
    }
  

  }, [locale, translations])


  return (
    <TranslationProviderContext.Provider
      value={value}
    >
      {children}
    </TranslationProviderContext.Provider>
  );
};





export default TranslationProvider
