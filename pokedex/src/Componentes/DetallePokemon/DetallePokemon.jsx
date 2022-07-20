import React from "react";
import "./DetallePokemon.css";
import flecha from "../Materiales/arrow-left.svg";
import peso from "../Materiales/Weight.svg";
import altura from "../Materiales/Height.svg";
import pokebola from "../Materiales/Pokeball.png";
import { Link, useParams } from "react-router-dom";
import frame from "../Materiales/Frame.svg";
import { useEffect, useState } from "react";

function DetallePokemon() {
  const { nombrePokemon } = useParams();
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    mostrarPokemon();
  });
  const mostrarPokemon = async () => {
    try {
      const respuesta = await fetch(
        `http://localhost:8080/pokemon/${nombrePokemon}`
      );
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const pokemonFetch = await respuesta.json();
      setPokemon(pokemonFetch);
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };
  const icono =
    pokemon.nombre &&
    require(`../Materiales/${pokemon.nombre.toLowerCase()}.png`);

  const modificarPokemon = () => {
    try {
    } catch (error) {
      console.log("");
    }
  };

  return (
    <div
      style={{ backgroundColor: pokemon.color, borderColor: pokemon.color }}
      className="contenedorDetalle"
    >
      {pokemon.prev && (
        <Link className="linkUno" to={`/DetallePokemon/${pokemon.prev}`}>
          <img className="frameDos" src={frame} alt="flechaDos" />
        </Link>
      )}
      {pokemon.next && (
        <Link className="linkDos" to={`/DetallePokemon/${pokemon.next}`}>
          <img className="frame" src={frame} alt="flecha" />
        </Link>
      )}
      <img className="pokebola" src={pokebola} alt="pokebola" />
      <div className="headerPokemon">
        <Link to="/">
          {" "}
          <img className="headerArrow" src={flecha} alt="flecha" />
        </Link>
        <h2 className="headerTitle">
          <b>{pokemon.nombre}</b>
        </h2>
        <div className="contenedorId">
          <span className="headerId">
            <b>{pokemon.id}</b>
          </span>
        </div>
      </div>
      <img className="imagenPokemon" src={icono} alt="iconoBulbasaur" />
      <div className="contenedorInfo">
        <div className="contenedorBotones">
          <button
            className="botonesTipo"
            id="botonUno"
            style={{
              backgroundColor: pokemon.color,
              borderColor: pokemon.color,
            }}
          >
            {pokemon.tipo}
          </button>
          {pokemon.tipoDos ? (
            <button
              className="botonesTipo"
              id="botonDos"
              style={{
                backgroundColor: pokemon.tipoDosColor,
                borderColor: pokemon.tipoDosColor,
              }}
            >
              {pokemon.tipoDos}
            </button>
          ) : null}
        </div>
        <h4 className="about" style={{ color: pokemon.color }}>
          About
        </h4>
        <div className="caracteristicas">
          <div className="hola">
            <img className="iconoWH" src={peso} alt="iconoPeso" />
            {pokemon.weight}
            <br />
            <br />
            <p>Weight</p>
          </div>
          <hr />
          <div className="hola">
            <img className="iconoWH" src={altura} alt="iconoAltura" />
            {pokemon.height} <br />
            <br />
            <p>Height</p>
          </div>
          <hr />
          <div className="hola">
            {pokemon.movimiento}
            <br />
            {pokemon.movimientoDos} <br />
            <p>Moves</p>
          </div>
        </div>
        <p className="descripcion">{pokemon.descripcion}</p>
        <h4 className="baseStates" style={{ color: pokemon.color }}>
          Base States
        </h4>
        <hr className="hrEstadisticas" />
        <div className="contenedorEstadistica">
          <div className="w3-container">
            <div className="habilidadUno">
              <div className="habilidad">
                <p className="p" style={{ color: pokemon.color }}>
                  HP
                </p>
              </div>
              <div className="barra">
                <span>{pokemon.hp}</span>
                <div
                  className="w3-light-grey"
                  style={{
                    height: "5px",
                    width: "200px",
                    borderRadius: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: pokemon.color,
                      height: "5px",
                      width: `${pokemon.hp}%`,
                      borderRadius: "1rem",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="habilidadUno">
              <div className="habilidad">
                <p className="p" style={{ color: pokemon.color }}>
                  ATK
                </p>
              </div>
              <div className="barra">
                <span>{pokemon.atk}</span>
                <div
                  className="w3-light-grey"
                  style={{
                    height: "5px",
                    width: "200px",
                    borderRadius: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: pokemon.color,
                      height: "5px",
                      width: `${pokemon.atk}%`,
                      borderRadius: "1rem",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="habilidadUno">
              <div className="habilidad">
                <p className="p" style={{ color: pokemon.color }}>
                  DEF
                </p>
              </div>
              <div className="barra">
                <span>{pokemon.def}</span>
                <div
                  className="w3-light-grey"
                  style={{
                    height: "5px",
                    width: "200px",
                    borderRadius: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: pokemon.color,
                      height: "5px",
                      width: `${pokemon.def}%`,
                      borderRadius: "1rem",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="habilidadUno">
              <div className="habilidad">
                <p className="p" style={{ color: pokemon.color }}>
                  SATK
                </p>
              </div>
              <div className="barra">
                <span>{pokemon.satk}</span>
                <div
                  className="w3-light-grey"
                  style={{
                    height: "5px",
                    width: "200px",
                    borderRadius: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: pokemon.color,
                      height: "5px",
                      width: `${pokemon.satk}%`,
                      borderRadius: "1rem",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="habilidadUno">
              <div className="habilidad">
                <p className="p" style={{ color: pokemon.color }}>
                  SDEF
                </p>
              </div>
              <div className="barra">
                <span>{pokemon.sdef}</span>
                <div
                  className="w3-light-grey"
                  style={{
                    height: "5px",
                    width: "200px",
                    borderRadius: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: pokemon.color,
                      height: "5px",
                      width: `${pokemon.sdef}%`,
                      borderRadius: "1rem",
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="habilidadUno">
              <div className="habilidad">
                <p className="p" style={{ color: pokemon.color }}>
                  SPD
                </p>
              </div>
              <div className="barra" id="barraInferior">
                <span>{pokemon.spd}</span>
                <div
                  className="w3-light-grey"
                  style={{
                    height: "5px",
                    width: "200px",
                    borderRadius: "1rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: pokemon.color,
                      height: "5px",
                      width: `${pokemon.spd}%`,
                      borderRadius: "1rem",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallePokemon;
