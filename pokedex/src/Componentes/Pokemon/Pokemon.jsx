import React from "react";
import "./Pokemon.css";
import { Link } from "react-router-dom";

const Pokemon = ({ pokemon }) => {
  const icono = require(`../Materiales/${pokemon.nombre.toLowerCase()}.png`);
  return (
    <Link key={pokemon.id} className="link" to="/DetallePokemon">
      <div style={{ borderColor: pokemon.color }} className="tarjetaPokemon">
        <p id="id" style={{ color: pokemon.color }} className="id">
          {pokemon.id}
        </p>
        <img className="iconoPokemon" src={icono} alt="iconoPokemon" />
        <div className="nombre" style={{ backgroundColor: pokemon.color }}>
          {pokemon.nombre}
        </div>
      </div>
    </Link>
  );
};

export default Pokemon;
