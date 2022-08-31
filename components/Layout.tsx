import React, { ContextType, ReactNode, useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import Navbar from "./Navbar";
import NavElement from "./NavElement";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { code, toggleLanguage } = useContext(LanguageContext);

  return (
    <>
      <header>
        <Navbar>
          <NavElement reference={"/"} content={"Home"} />
          <NavElement reference={"/projects"} content={"Projects"} />
          <button className="ml-auto" onClick={() => toggleLanguage()}>
            <a>{code === "en" ? "한국어" : "English"}</a>
          </button>
        </Navbar>
      </header>
      <main className="flex flex-col">{children}</main>
      <button />
    </>
  );
}
