"use client"

import React from 'react';
import Polyglot from 'node-polyglot';

type TranslationProviderInput = {
  translations: any;
  children: React.ReactNode;
  locale: string;
}

export const TranslationProviderContext = React.createContext({ translate: key => key });


const TranslationProvider =  ({ translations, locale, children }: TranslationProviderInput) => {


  const polyglot = new Polyglot({
    locale,
    phrases: translations[locale],
    onMissingKey: (key: string, options: any, locale: string) => `? ${key}`
  });

  return (
    <TranslationProviderContext.Provider
      value={{ 
       locale: locale, 
        translate: polyglot.t.bind(polyglot),
      }}
    >
      {children}
    </TranslationProviderContext.Provider>
  );
};





export default TranslationProvider
