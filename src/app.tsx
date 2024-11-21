import React, { useState } from "react";
import * as styles from "./styles/app.module.scss";
import { Header } from "./components/Header/Header";
import { RegisterCardForm } from "./components/RegisterCardForm/RegisterCardForm";
import { Menu } from "./components/Menu/Menu";

export const App = () => {
  const [view, setView] = useState<"register" | "menu">("register");

  const showMenu = () => setView("menu");
  const showRegister = () => setView("register");

  return (
    <div>
      <Header view={view} onMenuClick={showMenu} onBackClick={showRegister} />
      {view === "register" ? <RegisterCardForm /> : <Menu />}
    </div>
  )
};
