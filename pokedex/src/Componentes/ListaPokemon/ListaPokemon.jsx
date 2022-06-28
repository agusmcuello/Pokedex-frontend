import React from "react";
import "./ListaPokemon.css";
import pokeball from "../Materiales/Pokeball.png";
import Pokemon from "../Pokemon/Pokemon";
import { Link } from "react-router-dom";
import Bulbasaur from "../Materiales/bulbasaur.png";

function ListaPokemon({ listaPokemon }) {
  console.log(listaPokemon[0]);
  const listado = listaPokemon.map((pokemon) => (
    <Link key={pokemon.id} className="link" to="/DetallePokemon">
      <div className="tarjetaPokemon">
        <p className="id">{pokemon.id}</p>
        <img src={pokemon.icono} alt="" />
        <p className="nombre" style={{ backgroundColor: pokemon.color }}>
          {pokemon.nombre}
        </p>
      </div>
    </Link>
  ));
  return (
    <div className="contenedorLista">
      <header>
        <img src={pokeball} width="24px" height="32px" alt="Pokeball" />
        <h1>Pokédex</h1>
      </header>
      <nav>
        <input
          className="buscador"
          type="text"
          placeholder="Buscar"
          name=""
          id=""
        />
      </nav>
      {listado}
    </div>
  );
}

export default ListaPokemon;
