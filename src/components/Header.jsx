import React, { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "../utils/context";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  return (
    <nav className="sticky top-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 bg-black z-50">
      <div className="container flex justify-center items-center mx-auto">
        <a href="/">
          <img src="/logo_pokemon.png" alt="PokeBall" width={60} height={60} />
        </a>
        {theme === "dark" ? <BsSun className="w-8 h-8 text-white absolute right-4" onClick={() => handleThemeChange("light")} /> : <BsMoon className="w-8 h-8 text-white absolute right-4" onClick={() => handleThemeChange("dark")} />}
      </div>
    </nav>
  );
};

export default Header;
