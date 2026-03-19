import React, { createContext, useContext, useState } from 'react'
export const LanguageContext = createContext()
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}
export function useLang() { return useContext(LanguageContext) }
