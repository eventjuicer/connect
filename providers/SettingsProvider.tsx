"use client"

import React from 'react';


type SettingsProviderInput = {
  settings: object;
  children: React.ReactNode;
}

export const SettingsProviderContext = React.createContext({});


const SettingsProvider =  ({ settings, children }: SettingsProviderInput) => {

  return (
    <SettingsProviderContext.Provider
      value={settings}
    >
      {children}
    </SettingsProviderContext.Provider>
  );
};



export default SettingsProvider
