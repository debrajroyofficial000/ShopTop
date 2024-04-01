import { NavLink } from "react-router-dom";
import shopLogo from "../assets/shoplogo.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center  py-4">
      <div className="w-[150px]">
        <img src={shopLogo} alt="shopLogo" className="w-full" />
      </div>
      <div className="flex justify-center items-center gap-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-pastel py-2 px-4 rounded font-semibold"
              : "py-2 px-4 border-pastel border rounded font-semibold text-sea"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-pastel py-2 px-4 rounded font-semibold"
              : "py-2 px-4 border-pastel border rounded font-semibold text-sea"
          }
          to={"/products"}
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-pastel py-2 px-4 rounded font-semibold"
              : "py-2 px-4 border-pastel border rounded font-semibold text-sea"
          }
          to={"/cart"}
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
