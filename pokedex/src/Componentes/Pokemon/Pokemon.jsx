import "./Pokemon.css";
import { Link } from "react-router-dom";
import Button from "@mui/joy/Button";

const Pokemon = ({ pokemon, traerPokemon }) => {
  
  const borrarPokemon = async () => {
    try {
      const token = localStorage.getItem("token");
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
  return (
    <div className="contenedorPokemon">
      <Button
        className="botonBorrar"
        onClick={borrarPokemon}
        style={{
          color: "black",
          top: "5%",
          width: "25px",
          height: "25px",
          minHeight: "1px",
          fontSize:"large",
          minWidth:"1px",
          backgroundColor: "white",
          padding: "1px",
          marginLeft: "5px",
          display: localStorage.getItem("token") ? "inline-block" : "none",
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
            {console.log(pokemon)}
            {pokemon.number}
          </div>
          <img className="iconoPokemon" src={pokemon.icon} alt="iconoPokemon" />
          <div className="nombre" style={{ backgroundColor: pokemon.color }}>
            {pokemon.name}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Pokemon;
