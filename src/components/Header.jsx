import React from "react";

const Header = () => {
  return (
    <nav className="sticky top-0 w-full border-gray-200 px-2 sm:px-4 py-2.5 bg-cyan-600 z-50">
      <div className="container flex justify-center items-center mx-auto">
        <a href="/">
          <img src="/logo_pokemon.png" alt="PokeBall" width={60} height={60} />
        </a>
      </div>
    </nav>
  );
};

export default Header;
