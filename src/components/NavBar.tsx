import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper px1 light-blue darken-2">
        <a href="/" className="brand-logo">
          React + TS
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/">Список дел</NavLink>
          </li>
          <li>
            <NavLink to="/about">Инфо</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
