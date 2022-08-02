import React from 'react'
import "./notFound.css";
import { Link, useParams } from "react-router-dom";

function NotFound() {
  return (
    <div className='contenenedorNotFound'>
      <div className='imagenFondo'>
        <div className='contenedorTitulo'><h1 className='tituloNotFound'><b>The pokemon you are looking for does not exist</b></h1></div>
        <img className='signoInterrogacion' src="https://www.seekpng.com/png/full/880-8801651_32kib-790x1010-notblaziken-pokemon-silhouette-png.png" alt="" />
      <div className='enlacesNotFound'>
        <div className='irAPokedex'>
          <h3 className='colorLetraNotFound'> <b>To return to the Pokedex click here</b> </h3>
          <Link to="/">
            <button className='botonNotFound'> Pokedex</button>
          </Link>
        </div>
        <div className='crearElPokemon'>
          <h3 className='colorLetraNotFound'><b>Create that pokemon by clicking here</b></h3>
          <Link to="/agregarPokemon">
            <button className='botonNotFound'>Create pokemon</button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NotFound;