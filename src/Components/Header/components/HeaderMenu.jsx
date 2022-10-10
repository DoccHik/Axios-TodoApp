import React from "react";
import { Link } from "react-router-dom";

import "./HeaderMenu.css";

const HeaderMenu = () => {
  const headerMenuList = [
    {
      id: "all",
      name: "Все",
      path: "/task",
    },
    {
      id: "done",
      name: "Выполненные",
      path: "/done",
    },
  ];

  return (
    <>
      <ul className="header__menu">
        {headerMenuList &&
          headerMenuList.map((item) => (
            <li key={item.id} className="header__menu-item">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default HeaderMenu;
