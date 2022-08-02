import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaPokemon from "./Componentes/ListaPokemon/ListaPokemon";
import DetallePokemon from "./Componentes/DetallePokemon/DetallePokemon";
import Login from "./Componentes/Login/Login";
import SignUp from "./Componentes/SignUp/SignUp";
import AgregarPokemon from "./Componentes/AgregarPokemon/AgregarPokemon";
import NoteFound from "./Componentes/NotFound/NotFound";
function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            
            <Route path="/" element={<ListaPokemon />}></Route>
            <Route
              path="DetallePokemon/:nombrePokemon"
              element={<DetallePokemon />}
            ></Route>
            <Route path="/agregarPokemon" element={<AgregarPokemon/>}></Route>
            <Route path="/NotFound" element={<NoteFound/>}></Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;


