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
      return pokemon.nombre.toLowerCase().includes(keyword.toLowerCase());
    });
    setFoundPokemon(results);
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
          id="header"
          className="imagenHeader"
          src={pokeball}
          width="32px"
          height="34px"
          alt="Pokeball"
        />
        <h1 className="pokedex">
          <b>Pokédex</b>
        </h1>
        <div className="login">
          <Link href="/login">
            <Button
              style={{
                border: "1px solid rgb(236, 236, 236)",
                borderRadius: "10px",
                textDecoration: "none",
                backgroundColor: "rgb(236, 236, 236)",
                minHeight: "1px",
                minWidth: "1px",
                top: "28px",
                left: "10px",
                padding: "6px",
              }}
              className="botonLogin"
            >
              <span className="textoLogin">Login</span>
            </Button>
          </Link>
        </div>
        <button
          onClick={
            foundPokemon[0]?.id !== "#001" ? pokemonesId : pokemonesAlfabeto
          }
          className="headerIzq"
        >
          <h4 className="numeral">
            {foundPokemon[0]?.id === "#001" ? "#" : "a/z"}
          </h4>
          <img src={flecha} width="15px" height="25px" alt="flecha" />
        </button>
      </header>
      <nav>
        <input
          className="buscador"
          placeholder="🔎Buscar"
          type="search"
          onChange={filter}
        />
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
  );
}

export default ListaPokemon;
