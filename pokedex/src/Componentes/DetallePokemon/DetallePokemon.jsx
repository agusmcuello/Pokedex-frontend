import React from "react";
import "./DetallePokemon.css";
import flecha from "../Materiales/arrow-left.svg";
import peso from "../Materiales/Weight.svg";
import altura from "../Materiales/Height.svg";
import pokebola from "../Materiales/Pokeball.png";
function DetallePokemon({ pokemon }) {
  const icono = require(`../Materiales/${pokemon.nombre.toLowerCase()}.png`);
  return (
    <div
      style={{ backgroundColor: pokemon.color, borderColor: pokemon.color }}
      className="contenedorDetalle"
    >
      <img className="pokebola" src={pokebola} alt="" />
      <div className="headerPokemon">
        <img className="headerArrow" src={flecha} alt="flecha" />
        <h2 className="headerTitle">{pokemon.nombre}</h2>
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
          ) : (
            ""
          )}
        </div>
        <h3 style={{ color: pokemon.color }}>About</h3>
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
        <h3 style={{ color: pokemon.color }}>Base States</h3>
      </div>
    </div>
  );
}

export default DetallePokemon;
