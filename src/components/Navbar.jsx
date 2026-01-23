import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50
        flex gap-20 justify-center items-center
        h-[10vh] text-xl
        bg-gray-800
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <NavLink className={ (e) => e.isActive ? "text-pink-600" : ""} to="/">Home</NavLink>
      <NavLink className={(e) => e.isActive ? "text-pink-600" : ""} to="/about">About</NavLink>
      <NavLink className={(e) => e.isActive ? "text-pink-600" : ""} to="/recipes">Recipes</NavLink>
      <NavLink className={(e) => e.isActive ? "text-pink-600" : ""} to="/create-recipes">Create Recipes</NavLink>
      <NavLink className={(e) => e.isActive ? "text-pink-600" : ""} to="/favorite-recipes">Favorite</NavLink>
    </div>
  );
};

export default Navbar;
