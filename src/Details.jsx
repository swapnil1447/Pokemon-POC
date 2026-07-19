import React, { useEffect, useState } from "react";

export default function Details({ url }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    if (!url) {
      setPokemon(null);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <>
      <hr />

      <h2>Pokemon Details</h2>

      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />

      <p>Name: {pokemon?.name}</p>

      <p>Height: {pokemon?.height}</p>

      <p>Weight: {pokemon?.weight}</p>

      <p>Types: {pokemon?.types?.map((t) => t.type.name).join(", ")}</p>

      <p>
        Abilities: {pokemon?.abilities?.map((a) => a.ability.name).join(", ")}
      </p>
    </>
  );
}
