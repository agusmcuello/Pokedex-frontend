import React from 'react'
import "./agregarPokemon.css";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

function AgregarPokemon() {
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          maxWidth: 400,
          mx: "auto",
          my: 4,
          py: 3,
          px: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
      >
        <div className='contenedorAgregar'>
          <Typography level="h4" component="h1">
            <b>Add a new Pokemon!</b>
          </Typography>
        </div>
        <TextField
          name="name"
          type="text"
          placeholder="Name"
    
        />
        <input placeholder="Pokemon´s ID"type="number" />
        <select  name="type" id="type">
            <option value="">Type</option>
            <option value="">Water</option>
            <option value="">Grass</option>
            <option value="">Fire</option>
            <option value="">Electric</option>
            <option value="">Bug</option>
            <option value="">Dark</option>
        </select>
        <select  name="type" id="type">
            <option value="">Second Type</option>
            <option value="">Water</option>
            <option value="">Grass</option>
            <option value="">Fire</option>
            <option value="">Electric</option>
            <option value="">Bug</option>
            <option value="">Dark</option>
            <option value="">None</option>
        </select>
        <label htmlFor=""></label>
        <div>
        <span>Pokemon image</span>
       <input name="image"
          type="file"
          />
        </div>

    
        <Button
          sx={{
            mt: 1,
          }}
        >
          Add
        </Button>
      </Sheet>
    </CssVarsProvider>
  )
}

export default AgregarPokemon