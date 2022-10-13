import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPokemon from "../pages/DetailPokemon";
import Home from "../pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:poke_name" element={<DetailPokemon />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
