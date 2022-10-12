import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Card from "../components/Card";
import axios from "axios";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Home = ({ data, pokemons }) => {
  const [pokemon, setPokemon] = useState([]);
  const [datas, setDatas] = useState({});

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        const { data } = response;
        const trimmedData = {
          count: data.count,
          next: data.next,
          previous: data.previous,
        };
        setDatas(trimmedData);
        setPokemon(data.results);
      })
      .catch((error) => console.log(error.toString()));
  };

  const handleNavigation = async (endpoint) => {
    const res = await fetch(endpoint);
    const data = await res.json();
    const trimmedData = {
      count: data.count,
      next: data.next,
      previous: data.previous,
    };
    setDatas(trimmedData);
    setPokemon(data.results);
  };

  return (
    <Layout title="Pokemon App">
      <Container>
        {pokemon.map((poke) => (
          <Card key={poke.name} name={poke.name} url={poke.url} />
        ))}
        <div className="flex justify-between col-span-2 lg:col-span-4 gap-2">
          <BsFillArrowLeftCircleFill className={`w-10 h-10 ${datas.previous ? "text-black dark:text-white cursor-pointer" : "text-slate-600 cursor-default"}`} onClick={() => datas.previous && handleNavigation(datas.previous)} />
          <BsFillArrowRightCircleFill className={`w-10 h-10 ${datas.next ? "text-black dark:text-white cursor-pointer" : "text-slate-600 cursor-default"}`} onClick={() => datas.next && handleNavigation(datas.next)} />
        </div>
      </Container>
    </Layout>
  );
};

export default Home;
