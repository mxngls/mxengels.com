import { createContext } from "react";

import EnglishContent from "../public/en.json";

export const LanguageContext = createContext({
  code: "en",
  content: EnglishContent,
  toggleLanguage: () => {},
});
