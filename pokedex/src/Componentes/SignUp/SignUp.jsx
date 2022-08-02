import React from "react";
import "./sinup.css"
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertTitle, Alert, Modal } from "@mui/material";

function SignUp() {
    const [modalRegistro, setModalRegistro]= useState(false)
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    let navigate = useNavigate();

    const handleClose=()=>{
      setModalRegistro(false)
    }
    
    const handleChangeName = (e) => {
      setName(e.target.value);
    };
    
    const handleChangeMail = (e) => {
      setMail(e.target.value);
    };
    
    const handleChangePassword = (e) => {
      setPassword(e.target.value);
    };
    
    const handleModalRegistro=()=> {
      if(name&&password&&mail){
        return true
      }else{
        setModalRegistro(true)
      }
    }
    
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
    navigate("/login", { replace: true });
  } catch (error) {
    console.log("No se pudo conectar con el back end");
  }
}

  return (
    <>
    <CssVarsProvider>
      <Sheet
        sx={{
          maxWidth: 350, 
            mx: 70,
            my: 15,
            py: 2,
            px: 4,
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
          <h4 className="SingUp"><b>Sign up in Pokedex!</b></h4>
          <h5 className="letraCrear">Create an account</h5>
        </div>
        <div className="datosLogin">
            <p>Name</p>
          <input
            className="inputLogin"
            value={name}
            onChange={handleChangeName}
            name="name"
            type="text"
            placeholder="Charmander López"
          />
          </div>
        <div className="datosLogin">
            <p>Email</p>
          <input
            className="inputLogin"
            value={mail}
            onChange={handleChangeMail}
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
        <Button
          onClick={()=>{
           if(handleModalRegistro()){
            return checkSingUp()  
          } else{
            setModalRegistro(true)
          }}}
          sx={{
            mt: 1,
          }}
        >
          Sign up
        </Button>
      </Sheet>
    </CssVarsProvider>
    <Modal open={modalRegistro} onClose={handleClose}>
    <Alert className="alertaLogin" severity="warning">
      <AlertTitle>Warning</AlertTitle>
      Fill all the fields
    </Alert>
  </Modal>
  </>
  );
        };
export default SignUp;
