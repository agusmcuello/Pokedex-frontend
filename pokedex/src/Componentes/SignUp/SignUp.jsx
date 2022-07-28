import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();
    
    const handleChangeName = (e) => {
      setName(e.target.value);
    };

    const handleChangeMail = (e) => {
      setMail(e.target.value);
    };
    
    const handleChangePassword = (e) => {
      setPassword(e.target.value);
    };

  
const checkSingUp = async () => {
  try {
    const respuesta = await fetch("http://localhost:8080/register", {
      method: "POST",
      body: JSON.stringify({name, mail, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!respuesta.ok) {
      throw new Error("Error en el servidor");
    }
    const usuarioRegistrado = await respuesta.json();
    navigate("/", { replace: true });
  } catch (error) {
    console.log("No se pudo conectar con el back end");
  }
}

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
          value={name}
          onChange={handleChangeName}
          name="name"
          type="text"
          placeholder="Juan Pérez"
          label="Name"
        />
        <TextField
          value={mail}
          onChange={handleChangeMail}
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          label="Email"
        />
        <TextField
          value={password}
          onChange={handleChangePassword}
          name="password"
          type="password"
          placeholder="password"
          label="Password"
        />
        <Button
          onClick={checkSingUp}
          sx={{
            mt: 1,
          }}
        >
          Sign up
        </Button>
      </Sheet>
    </CssVarsProvider>
  );
        };
export default SignUp;
