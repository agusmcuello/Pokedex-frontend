import React from "react";
import "./ListaPokemon.css";
import pokeball from "../Materiales/Pokeball.png";
import Pokemon from "../Pokemon/Pokemon";
import flecha from "../Materiales/Arrow.svg";
import { useState } from "react";

function ListaPokemon({ listaPokemon }) {
  const [nombre, setNombre] = useState("");
  const [foundPokemon, setFoundPokemon] = useState(listaPokemon);

  const mostrarPokemones = foundPokemon.map((pokemon) => (
    <Pokemon key={pokemon.id} pokemon={pokemon} />
  ));
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = listaPokemon.filter((pokemon) => {
        return pokemon.nombre.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundPokemon(results);
    } else {
      setFoundPokemon(listaPokemon);
    }
    setNombre(keyword);
  };
  const pokemonesAlfabeto = () => {
    const arrayNuevo = [...foundPokemon].sort((a, b) => {
      if (a.nombre > b.nombre) return 1;
      if (a.nombre < b.nombre) return -1;
    });
    setFoundPokemon(arrayNuevo);
  };
  const pokemonesId = () => {
    const arrayNuevoDos = [...foundPokemon].sort((a, b) => {
      if (a.id > b.id) return 1;
      if (a.id < b.id) return -1;
    });
    setFoundPokemon(arrayNuevoDos);
  };

  return (
    <div className="contenedorLista">
      <header>
        <img
          className="imagenHeader"
          src={pokeball}
          width="30px"
          height="32px"
          alt="Pokeball"
        />
        <h1 className="pokedex">Pokédex</h1>
        <button
          onClick={
            foundPokemon[0].id !== "#001" ? pokemonesId : pokemonesAlfabeto
          }
          className="headerIzq"
        >
          <h4 className="numeral">
            {foundPokemon[0].id === "#001" ? "#" : "a/z"}
          </h4>
          <img src={flecha} width="15px" height="25px" alt="flecha" />
        </button>
      </header>
      <nav>
        <input
          className="buscador"
          placeholder="Buscar"
          type="search"
          value={nombre}
          onChange={filter}
        />
      </nav>
      {mostrarPokemones}
    </div>
  );
}

export default ListaPokemon;
