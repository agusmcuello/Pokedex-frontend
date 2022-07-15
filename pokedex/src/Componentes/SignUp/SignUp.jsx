import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";

function SignUp() {
  const checkRegister = async () => {
    try {
      const respuesta = await fetch("http://localhost:1234/login");
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const usuarioRegistrado = await respuesta.json();
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };
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
        <div>
          <Typography level="h4" component="h1">
            <b>Sign up in Pokedex!</b>
          </Typography>
          <Typography level="body2">Create an account</Typography>
        </div>
        <TextField
          name="email"
          type="email"
          placeholder="Juan Pérez"
          label="Name"
        />
        <TextField
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          label="Email"
        />
        <TextField
          name="password"
          type="password"
          placeholder="password"
          label="Password"
        />
        <Button
          onClick={checkRegister()}
          sx={{
            mt: 1, // margin top
          }}
        >
          Sign up
        </Button>
      </Sheet>
    </CssVarsProvider>
  );
}

export default SignUp;
