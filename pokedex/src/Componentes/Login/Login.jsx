import React from "react";
import "./login.css";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertTitle } from "@mui/material";
import Modal from "@mui/material/Modal";

function Login() {
  const [modalLogin, setModalLogin] = useState(null);
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const hanldeModalLogin = (error) => setModalLogin(error);
  const handleClose = () => setModalLogin(null);
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
      const respuestaCorrecta = await respuesta.json();
      if (!respuesta.ok) {
        // alertrespuestaCorrecta.error)
        hanldeModalLogin(respuestaCorrecta.error);
      } else {
        guardarToken(respuestaCorrecta.token);
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };
  
  return (
    <>
      <CssVarsProvider>
        <Sheet
          sx={{
            maxWidth: 350,
            mx: 70,
            my: 15,
            py: 1,
            px: 4,
            display: "flex",
            flexDirection: "column",
            gap: 4,
            borderRadius: "sm",
            boxShadow: "md",
            backgroundImage:
              "url(https://image.winudf.com/v2/image/Y29tLm5hYWppeWEucG9rZW1vbl9zY3JlZW5zaG90c180X2U4MGU1YTk3/screen-4.jpg?fakeurl=1&type=.webp)",
            backgroundSize: "cover",
          }}
        >
          <div>
            <h3>
              <b className="welcomePokedex">Welcome to Pokedex!</b>
            </h3>
            <h5 className="letraSignInto">Sign in to continue</h5>
          </div>
          <div className="datosLogin">
            <p>Email</p>
            <input
              className="inputLogin"
              value={mail}
              onChange={handleChangeEmail}
              name="email"
              type="email"
              placeholder="pikachu@email.com"
            />
          </div>
          <div className="datosLogin">
            <p>Password</p>
            <input
              className="inputLogin"
              value={password}
              onChange={handleChangePassword}
              name="password"
              type="password"
              placeholder="1234"
            />
          </div>
          <Button onClick={checkLogin}>Log in</Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: "center" }}
          >
            <h6 className="donthave"> Don't have an account? </h6>
          </Typography>
        </Sheet>
      </CssVarsProvider>
      <Modal open={modalLogin} onClose={handleClose}>
        <Alert className="alertaLogin" severity="warning">
          <AlertTitle>Warning</AlertTitle>
          {modalLogin}
        </Alert>
      </Modal>
    </>
  );
}

export default Login;
