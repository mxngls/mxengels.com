import React, { useState } from "react";
import { AppProps } from "next/app";
import { LanguageContext } from "../components/LanguageContext";
import "../styles/globals.css";

import EnglishContent from "../public/en.json";
import KoreanContent from "../public/kr.json";

function MyApp({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState({
    code: "en",
    content: EnglishContent,
  });

  const toggleLanguage = () => {
    if (language.code === "en") {
      setLanguage((language) => ({
        ...language,
        code: "kr",
        content: KoreanContent,
      }));
    } else {
      setLanguage((language) => ({
        ...language,
        code: "en",
        content: EnglishContent,
      }));
    }
  };
  return (
    <LanguageContext.Provider
      value={{
        code: language.code,
        content: language.content,
        toggleLanguage: toggleLanguage,
      }}
    >
      <Component {...pageProps} />
    </LanguageContext.Provider>
  );
}

export default MyApp;
