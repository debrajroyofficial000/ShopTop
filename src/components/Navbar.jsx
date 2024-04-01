import { NavLink } from "react-router-dom";
import shopLogo from "../assets/shoplogo.png";
import Nav from "./Nav";
import { useState } from "react";
function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <nav className="flex justify-between items-center relative py-4">
      <div className="w-[150px]">
        <img src={shopLogo} alt="shopLogo" className="w-full" />
      </div>
      <div className={`md:flex justify-center items-center gap-4  hidden`}>
        <Nav link={"/"} navName={"Home"} />
        <Nav link={"/products"} navName={"Products"} />
        <Nav link={"/cart"} navName={"Cart"} />
      </div>

      <div
        className="w-7 h-7 flex flex-col md:hidden justify-center gap-2 absolute z-10 right-0 "
        onClick={() => setIsToggle((prev) => !prev)}
      >
        <div className="h-1 rounded-md bg-dark_beige"></div>
        <div className="h-1 rounded-md bg-dark_beige"></div>
        <div className="h-1 rounded-md bg-dark_beige"></div>
      </div>
      <div
        className={`absolute w-full right-0 z-0 top-full op-full bg-black md:hidden ${
          !isToggle && "hidden"
        }`}
      >
        <Nav link={"/"} navName={"Home"} />
        <Nav link={"/products"} navName={"Products"} />
        <Nav link={"/cart"} navName={"Cart"} />
      </div>
    </nav>
  );
}

export default Navbar;
