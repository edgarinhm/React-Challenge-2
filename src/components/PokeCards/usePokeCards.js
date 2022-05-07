import { mockPokemonsData } from "../../mock/pokeData";

const usePokeCards = () => {
  mockPokemonsData.sort(
    (a, b) => a.name - b.name || a.name.localeCompare(b.name)
  );
  return { mockPokemonsData };
};

export default usePokeCards;
