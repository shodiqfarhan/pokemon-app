import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/pokemon/${props.name}`)} className="m-2 border-4 rounded-2xl border-black dark:border-white shadow-lg shadow-black">
      <Link>
        <div className="flex justify-center">
          <img
            src={props.url ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.url.slice(34, 37).replace(/\/+$/, "")}.svg` : "https://via.placeholder.com/500x750?text=No+Image"}
            alt={props.name}
            className="w-[200px] h-[200px]"
          />
        </div>
        <p className="text-xs text-white uppercase text-center font-bold tracking-widest bg-black rounded-b-lg dark:rounded-b-xl py-2">
          {props.name}
          {props.alias && <br />}
          {props.alias && `(${props.alias})`}
        </p>
      </Link>
    </div>
  );
};

export default Card;
