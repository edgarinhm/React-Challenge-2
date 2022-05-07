import React from "react";
import PokeCard from "../PokeCard/PokeCard";
import usePokeCards from "./usePokeCards";

const PokeCards = () => {
  const { mockPokemonsData } = usePokeCards();

  return (
    <div>
      {mockPokemonsData.map((data, index) => (
        <PokeCard
          key={data.name + index}
          title={data.name}
          imgDefault={data.sprites.front_default}
          imgShiny={data.sprites.front_shiny}
          urlVideo={data.videoLink}
        />
      ))}
    </div>
  );
};

export default PokeCards;
