import { createContext, useState, useContext } from "react";

// Creación del contexto
const LanguageContext = createContext();

// Proveedor del contexto
export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState("en");

  const toggleLanguage = () => {
    setCurrentLang((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  return (
    <LanguageContext.Provider value={{ currentLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useLanguage = () => useContext(LanguageContext);
 
  
