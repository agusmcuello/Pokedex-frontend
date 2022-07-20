import "./Pokemon.css";
import { Link } from "react-router-dom";
import Button from "@mui/joy/Button";

const Pokemon = ({ pokemon, traerPokemon }) => {
  const token = localStorage.getItem("token");

  const borrarPokemon = async () => {
    try {
      const respuesta = await fetch(
        `http://localhost:1234/borrarPokemon/${pokemon.nombre}`,
        { method: "DELETE", headers: { Authorization: token } }
      );
      traerPokemon();
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const pokemonFetch = await respuesta.json();
      console.log(pokemonFetch);
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };
  const icono = require(`../Materiales/${pokemon.nombre.toLowerCase()}.png`);
  return (
    <div className="contenedorPokemon">
      <Button
        className="botonBorrar"
        onClick={borrarPokemon}
        style={{
          color: "white",
          top: "5%",
          width: "18px",
          height: "20px",
          minHeight: "1px",
          backgroundColor: "grey",
          padding: "1px",
          marginLeft: "5px",
          display: token ? "inline-block" : "none",
        }}
      >
        <span
          style={{
            padding: "0px",
          }}
        >
          x
        </span>
      </Button>
      <Link
        key={pokemon.id}
        className="link"
        to={`/DetallePokemon/${pokemon.nombre.toLowerCase()}`}
      >
        <div style={{ borderColor: pokemon.color }} className="tarjetaPokemon">
          <div
            id="id"
            style={{ color: pokemon.color, borderColor: pokemon.color }}
            className="id"
          >
            {pokemon.id}
          </div>
          <img className="iconoPokemon" src={icono} alt="iconoPokemon" />
          <div className="nombre" style={{ backgroundColor: pokemon.color }}>
            {pokemon.nombre}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Pokemon;
