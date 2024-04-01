import React from "react";
import { NavLink } from "react-router-dom";
function Nav({ link, navName }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-pastel py-2 px-4 rounded font-semibold block"
          : "py-2 px-4 border-pastel border rounded font-semibold text-sea block"
      }
      to={link}
    >
      {navName}
    </NavLink>
  );
}

export default Nav;
