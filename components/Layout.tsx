import React from "react";
import Navbar from "./Navbar";
import NavElement from "./NavElement";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <Navbar>
          <NavElement reference={"/"} content={"Home"} />
          <NavElement reference={"/projects"} content={"Projects"} />
        </Navbar>
      </header>
      <main className="flex flex-col">{children}</main>
    </div>
  );
}
