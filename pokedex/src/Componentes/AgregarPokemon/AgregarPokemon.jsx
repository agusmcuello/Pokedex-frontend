import React from 'react'
import "./agregarPokemon.css";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

function AgregarPokemon() {
  return (
    <div className='contenedor'>
      <form action="register">
      <input type="text" placeholder='Name' />
      <input type="text" placeholder='Color' />
      <input type="text" placeholder='Type' />
      <input type="text" placeholder='Second type' />
      <input type="text" placeholder='Second type color' />
      <input type="text" placeholder='Weight' />
      <input type="text" placeholder='Height' />
      <input type="text" placeholder='Ability' />
      <input type="text" placeholder='Second ability' />
      <input type="text" placeholder='Description' />
      <input type="text" placeholder='Pokemon-ID' />
      <input type="text" placeholder='HP' />
      <input type="text" placeholder='ATK' />
      <input type="text" placeholder='DEF' />
      <input type="text" placeholder='SATK' />
      <input type="text" placeholder='SDEF' />
      <input type="text" placeholder='SPD' />
    </form>
    </div>
  )
}

export default AgregarPokemon