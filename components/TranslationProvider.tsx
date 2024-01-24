"use client"

import React from 'react';
import Polyglot from 'node-polyglot';

type TranslationProviderInput = {
  translations: {};
  children: React.ReactNode;
  locale: string;
}

export const Context = React.createContext({ translate: key => key });

const TranslationProvider =  ({ translations, locale, children }: TranslationProviderInput) => {


  const polyglot = new Polyglot({
    locale,
    phrases: translations[locale],
    onMissingKey: (key, options, locale) => `missing: ${key}`
  });

  return (
    <Context.Provider
      value={{ 
       locale: locale, 
        translate: polyglot.t.bind(polyglot),
      }}
    >
      {children}
    </Context.Provider>
  );
};



export default TranslationProvider
