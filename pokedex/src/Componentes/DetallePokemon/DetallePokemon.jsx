import React from "react";
import Bulbasaur from "../Bulbasaur/Bulbasaur";

function DetallePokemon({ listaPokemon }) {
  const detalle = listaPokemon.map((pokemon) => (
    <Bulbasaur key={pokemon.id} pokemon={pokemon} />
  ));
  return <div className="contenedorDetalle">{detalle}</div>;
}

export default DetallePokemon;
