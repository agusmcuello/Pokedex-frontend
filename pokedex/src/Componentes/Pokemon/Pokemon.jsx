import "./Pokemon.css";
import { Link } from "react-router-dom";
import Button from "@mui/joy/Button";

const Pokemon = ({ pokemon, traerPokemon }) => {
  const token = localStorage.getItem("token");

  const borrarPokemon = async () => {
    try {
      const respuesta = await fetch(
        `http://localhost:8080/borrarPokemon/${pokemon.name}`,
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
  const icono = require(`../Materiales/${pokemon.name.toLowerCase()}.png`);
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
        to={`/DetallePokemon/${pokemon.name.toLowerCase()}`}
      >
        <div style={{ borderColor: pokemon.color }} className="tarjetaPokemon">
          <div
            id="id"
            style={{ color: pokemon.color, borderColor: pokemon.color }}
            className="id"
          >
            {pokemon.number}
          </div>
          <img className="iconoPokemon" src={icono} alt="iconoPokemon" />
          <div className="nombre" style={{ backgroundColor: pokemon.color }}>
            {pokemon.name}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Pokemon;
