import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListaPokemon from "./Componentes/ListaPokemon/ListaPokemon";
import DetallePokemon from "./Componentes/DetallePokemon/DetallePokemon";

function App() {
  const listaPokemon = [
    {
      nombre: "Bulbasaur",
      color: "#74CB48",
      icono: "../Materiales/bulbasaur.png",
      id: "#001",
      tipo: "grass",
      tipoDos: "poison",
      weight: "6,9kg",
      height: "0,7m",
      movimiento: "Chlorophyll",
      movimientoDos: "Overgrow",
      descripcion:
        "There is a plant seed on its back right from the day this Pokemon is bron. The seed slowly grows larger",
      estadisticas: {
        hp: "045",
        atk: "049",
        def: "049",
        satk: "065",
        sdef: "065",
        spd: "045",
      },
    },
    {
      nombre: "Charmander",
      color: "#F57D31",
      id: "#004",
      tipo: "fire",
      weight: "8,5kg",
      height: "0,6m",
      movimiento: "Mega-Punch",
      movimientoDos: "Fire-Punch",
      descripcion:
        "It has a preference for hot things. When it rains, steam is said to sopaut from the tip of its tail",
      estadisticas: [
        {
          hp: "039",
          atk: "052",
          def: "043",
          satk: "060",
          sdef: "050",
          spd: "065",
        },
      ],
    },
    {
      nombre: "Squirtle",
      color: "#6493EB",
      id: "#007",
      tipo: "water",
      weight: "9,0kg",
      height: "0,5m",
      movimiento: "Torrent",
      movimientoDos: "Rain-Dish",
      descripcion:
        "When it retracts its long neck into its shell, it squirts out water with vigorus force",
      estadisticas: [
        {
          hp: "044",
          atk: "048",
          def: "065",
          satk: "050",
          sdef: "064",
          spd: "043",
        },
      ],
    },
    {
      nombre: "Butterfree",
      color: "#A7B723",
      id: "#012",
      tipo: "bug",
      tipoDos: "flying",
      weight: "32,0kg",
      height: "1,1m",
      movimiento: "Compound-Eyes",
      movimientoDos: "Tinted-Lens",
      descripcion:
        "In batlle, it flaps its wings at great speed to release highly toxic dust into the air",
      estadisticas: [
        {
          hp: "060",
          atk: "045",
          def: "050",
          satk: "090",
          sdef: "080",
          spd: "070",
        },
      ],
    },
    {
      nombre: "Pikachu",
      color: "#F9CF30",
      id: "#025",
      tipo: "electric",
      weight: "6,0kg",
      height: "0,4m",
      movimiento: "Mega-Punch",
      movimientoDos: "Pay-Day",
      descripcion:
        "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy",
      estadisticas: [
        {
          hp: "035",
          atk: "055",
          def: "040",
          satk: "050",
          sdef: "050",
          spd: "090",
        },
      ],
    },
    {
      nombre: "Gastly",
      color: "#70559B",
      id: "#092",
      tipo: "ghost",
      tipoDos: "type",
      weight: "0.1kg",
      height: "1,3m",
      movimiento: "Levitate",
      descripcion:
        "Born from grases, anyone would faint if enguelted by its gaseous body, which contains posion",
      estadisticas: [
        {
          hp: "030",
          atk: "035",
          def: "030",
          satk: "100",
          sdef: "035",
          spd: "080",
        },
      ],
    },
    {
      nombre: "Ditto",
      color: "#AAA67F",
      id: "#132",
      tipo: "normal",
      weight: "4kg",
      height: "0,3m",
      movimiento: "Limber",
      movimientoDos: "imposter",
      descripcion:
        "it can reconstitute its entire cellular structure to change into what it sees, but it retunrs to normal when it relaxes",
      estadisticas: [
        {
          hp: "048",
          atk: "048",
          def: "048",
          satk: "048",
          sdef: "048",
          spd: "048",
        },
      ],
    },
    {
      nombre: "Mew",
      color: "#FB5584",
      id: "#152",
      tipo: "psychic",
      weight: "4kg",
      height: "0,4m",
      movimiento: "Synchronize",
      descripcion:
        "When viewed through a microscope, this Poekmons short, fien, delicate hair can be seen",
      estadisticas: [
        {
          hp: "100",
          atk: "100",
          def: "100",
          satk: "100",
          sdef: "100",
          spd: "100",
        },
      ],
    },
    {
      nombre: "Aron",
      color: "#B7B9D0",
      id: "#304",
      tipo: "steel",
      tipoDos: "rock",
      weight: "60g",
      height: "0,4m",
      movimiento: "Sturdy",
      movimientoDos: "Rock-Head",
      descripcion:
        "it eats iron ore - and sometimes railroad tracks - to build up the steel armor that prostects its body",
      estadisticas: [
        {
          hp: "050",
          atk: "070",
          def: "100",
          satk: "040",
          sdef: "040",
          spd: "030",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<ListaPokemon listaPokemon={listaPokemon} />}
            ></Route>
            <Route path="DetallePokemon" element={<DetallePokemon />}></Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
