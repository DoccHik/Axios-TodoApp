import React from "react";

import "./Header.css";

import HeaderMenu from "./components/HeaderMenu";
import LogoApp from "../../assets/icons/LogoApp";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-row">
            <Link to="/task" className="header__logo">
              <LogoApp />
              <span className="header__logo-name">Task planner</span>
            </Link>
            <HeaderMenu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
