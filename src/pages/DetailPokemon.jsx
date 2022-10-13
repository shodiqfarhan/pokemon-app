import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Section from "../components/Section";

const DetailPokemon = () => {
  const [detail, setDetail] = useState({});
  let params = useParams();

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.poke_name}`)
      .then((response) => {
        const { data } = response;
        setDetail({
          pokemon: data,
          types: data.types,
          stats: data.stats,
          abilities: data.abilities,
          img: data.sprites.other.dream_world.front_default,
          name: data.name,
          height: data.height,
        });
      })
      .catch((error) => console.log(error.toString()));
  };

  return (
    <Layout title="Pokemon App" description="Place where you can catch a Pokemon and name it yourself!">
      <div className="grid grid-flow-row auto-rows-max grid-cols-2 h-full">
        <Section center>
          <div className="flex justify-evenly">
            <img src={detail.img ? detail.img : "https://via.placeholder.com/500x750?text=No+Image"} alt={detail.name} className="w-[200px] h-[200px]" />
            <div className="flex-col">
              <p>Name: {detail.name}</p>
              <p>Height: {detail.height}</p>
              <p>Abilities:</p>
              <ul className="list-disc list-outside ml-3">
                {detail.abilities?.map((item) => {
                  return !item.is_hidden && <li key={item.slot}>{item.ability.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </Section>
        <Section>
          {detail.stats?.map((item, index) => (
            <div key={index} className="w-full">
              <p>{item.stat.name}</p>
              <div className="w-full bg-gray-400 dark:bg-gray-200 h-1">
                <div
                  className="bg-blue-600 h-1"
                  style={{
                    width: `${item.base_stat <= 100 ? item.base_stat : 100}%`,
                  }}
                ></div>
              </div>
              <p>{item.base_stat}</p>
            </div>
          ))}
        </Section>
      </div>
    </Layout>
  );
};

export default DetailPokemon;
