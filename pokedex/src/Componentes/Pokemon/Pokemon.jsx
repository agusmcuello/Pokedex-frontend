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
    <div>
      <Button
        className="botonBorrar"
        onClick={borrarPokemon}
        style={{
          color: "white",
          width: "10px",
          display: token ? "inline-block" : "none",
        }}
      >
        x
      </Button>
      <Link
        key={pokemon.id}
        className="link"
        to={`/DetallePokemon/${pokemon.nombre.toLowerCase()}`}
      >
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
    </div>
  );
};

export default Pokemon;
