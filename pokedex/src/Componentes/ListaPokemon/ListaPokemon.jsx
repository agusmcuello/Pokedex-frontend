import React from "react";
import "./ListaPokemon.css";
import pokeball from "../Materiales/Pokeball.png";
import Pokemon from "../Pokemon/Pokemon";
import flecha from "../Materiales/Arrow.svg";
import { useState } from "react";
import { useEffect } from "react";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

function ListaPokemon() {
  const [foundPokemon, setFoundPokemon] = useState([]);
  const [listaPokemon, setListaPokemon] = useState([]);
  useEffect(() => {
    traerPokemon();
  }, []);
  const token = localStorage.getItem("token");
  const traerToken = () => {
    return localStorage.getItem("token");
  };
  const traerPokemon = async () => {
    try {
      const token = traerToken();
      const respuesta = await fetch("http://localhost:8080/pokemon");
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const pokemonFetch = await respuesta.json();
      pokemonFetch.sort((a, b) => {
        if (a.number > b.number) return 1;
        if (a.number < b.number) return -1;
      });
      setListaPokemon(pokemonFetch);
      setFoundPokemon(pokemonFetch);
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };

  const mostrarPokemones = foundPokemon.map((pokemon) => (
    <Pokemon key={pokemon.id} pokemon={pokemon} traerPokemon={traerPokemon} />
  ));
  const filter = (e) => {
    const keyword = e.target.value;
    const results = [...listaPokemon].filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(keyword.toLowerCase());
    });
    setFoundPokemon(results);
  };
  const pokemonesAlfabeto = () => {
    const arrayNuevo = [...foundPokemon].sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
    });
    setFoundPokemon(arrayNuevo);
  };
  const pokemonesId = () => {
    const arrayNuevoDos = [...foundPokemon].sort((a, b) => {
      if (a.number > b.number) return 1;
      if (a.number < b.number) return -1;
    });
    setFoundPokemon(arrayNuevoDos);
  };

  return (
   <div className="divPadre">
     <div className="contenedorLista">
      <header>
        <img
          id="header"
          className="imagenHeader"
          src={pokeball}
          width="100px"
          height="100px"
          alt="Pokeball"
        />
        <h1 className="pokedex">
          <b>Pokédex</b>
        </h1>
        <div className="login">
          <Link href="/login">
            <button className="botonLogin">
              <span className="textoLogin">Login</span>
            </button>
          </Link>
        </div>
        <button
          onClick={
            foundPokemon[0]?.number !== "#001" ?  pokemonesId : pokemonesAlfabeto
          }
          className="headerIzq"
        >
          <h4 className="numeral">
            {foundPokemon[0]?.number === "#001" ? "#" : "a/z"}
          </h4>
          <img src={flecha} width="25px" height="30px" alt="flecha" />
        </button>
      </header>
      <nav>
        <input
          className="buscador"
          placeholder="🔎Buscar"
          type="search"
          onChange={filter}
        />
          <Link style={{display: token ? "inline-block" : "none"}} className="botonAdd" href="/agregarPokemon">
            <button className="botonAdd">
              <span className="textoLogin">Add a new Pokemon</span>
            </button>
          </Link>
      </nav>
      {foundPokemon.length ? (
        mostrarPokemones
      ) : (
        <div className="textoAdvertencia">
          <p>
            <b>
              No se encontró ningun Pokemon <br />
              con ese nombre
            </b>
          </p>
        </div>
      )}
    </div>
   </div>
  );
}

export default ListaPokemon;
