import React from "react";
import "./login.css"
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setMail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const guardarToken = (token) => {
    localStorage.setItem("token", token);
  };

  const checkLogin = async () => {
    try {
      const respuesta = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({ mail, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const usuarioIngresado = await respuesta.json();
      guardarToken(usuarioIngresado.token);
      navigate("/", { replace: true });
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };
  return (
    <div className="contenedorLogin">
        <CssVarsProvider>
        <Sheet
          sx={{
            maxWidth: 300,
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
            backgroundImage: "url(https://image.winudf.com/v2/image/Y29tLm5hYWppeWEucG9rZW1vbl9zY3JlZW5zaG90c180X2U4MGU1YTk3/screen-4.jpg?fakeurl=1&type=.webp)",
            backgroundSize: "cover",
          }}
        >
  
          <div>
            <Typography level="h4" component="h1">
              <b className="welcomePokedex">Welcome to Pokedex!</b>
            </Typography>
            <Typography level="body2">
              <h6 className="letraSignInto">Sign in to continue</h6>
              </Typography>
          </div>
          <TextField
            value={mail}
            onChange={handleChangeEmail}
            name="email"
            type="email"
            placeholder="pikachu@email.com"
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
            onClick={checkLogin}
            sx={{
              mt: 1,
            }}
          >
            Log in
          </Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
           <h6 className="donthave"> Don't have an account? </h6>
          </Typography>
        </Sheet>
      </CssVarsProvider>
    </div>
  );
}

export default Login;
