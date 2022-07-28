import React from "react";
import "./agregarPokemon.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  height: "400px",
  bgcolor: "background.paper",
};

function AgregarPokemon() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [type_two, setType_two] = useState("");
  const [type_two_color, setType_two_color] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [first_ability, setFirst_ability] = useState("");
  const [second_ability, setSecond_ability] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const [icon, setIcon] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [satk, setSatk] = useState("");
  const [sdef, setSdef] = useState("");
  const [spd, setSpd] = useState("");
  let navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeColor = (e) => {
    setColor(e.target.value);
  };
  const handleChangeIcon = (e) => {
    setIcon(e.target.value);
  };
  const handleChangeType = (e) => {
    setType(e.target.value);
  };
  const handleChangeType_two = (e) => {
    setType_two(e.target.value);
  };
  const handleChangeType_two_color = (e) => {
    setType_two_color(e.target.value);
  };
  const handleChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleChangeFirst_ability = (e) => {
    setFirst_ability(e.target.value);
  };
  const handleChangeSecond_ability = (e) => {
    setSecond_ability(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };
  const handleChangeHp = (e) => {
    setHp(e.target.value);
  };
  const handleChangeAtk = (e) => {
    setAtk(e.target.value);
  };
  const handleChangeDef = (e) => {
    setDef(e.target.value);
  };
  const handleChangeSatk = (e) => {
    setSatk(e.target.value);
  };
  const handleChangeSdef = (e) => {
    setSdef(e.target.value);
  };
  const handleChangeSpd = (e) => {
    setSpd(e.target.value);
  };

  const checkNewPokemon = async () => {
    try {
      const respuesta = await fetch("http://localhost:8080/agregarPokemon", {
        method: "POST",
        body: JSON.stringify({
          name,
          color,
          type,
          type_two,
          type_two_color,
          weight,
          height,
          icon,
          first_ability,
          second_ability,
          number,
          description,
          atk,
          def,
          satk,
          sdef,
          hp,
          spd,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }
      const pokemonIngresado = await respuesta.json();
    } catch (error) {
      console.log("No se pudo conectar con el back end");
    }
  };

  return (
    <div className="contenedor">
      <aside className="icono">
        <h3>The image of your Pokemon</h3>
        <input
          className="iconoI"
          type="url"
          value={icon}
          onChange={handleChangeIcon}
          placeholder="url"
        />
      </aside>

      <main className="principal">
        <h1 id="titulo">
          <b>Add a new Pokemon</b>
        </h1>
        <input
          className="principalI"
          type="text"
          value={name}
          onChange={handleChangeName}
          placeholder="Name"
        />
        <input
          className="principalI"
          type="text"
          value={number}
          onChange={handleChangeNumber}
          placeholder="Pokemon-ID"
        />
        <input
          className="principalI"
          type="text"
          value={type}
          onChange={handleChangeType}
          placeholder="Type"
        />
      </main>

      <aside className="habilidades">
        <h3>His skills</h3>
        <input
          className="iconoI"
          type="text"
          value={first_ability}
          onChange={handleChangeFirst_ability}
          placeholder="Ability"
        />
        <input
          className="iconoI"
          type="text"
          value={second_ability}
          onChange={handleChangeSecond_ability}
          placeholder="Second ability"
        />
      </aside>

      <section className="peso">
        <h3>Weight</h3>
        <input
          className="pesoAltura"
          type="text"
          value={weight}
          onChange={handleChangeWeight}
          placeholder="00,00kg"
        />
        <h3>Height</h3>
        <input
          className="pesoAltura"
          type="text"
          value={height}
          onChange={handleChangeHeight}
          placeholder="0,0m"
        />
      </section>

      <section className="altura">
        <h3>The description of your Pokemon</h3>
        <textarea
          className="pesoAltura"
          value={description}
          onChange={handleChangeDescription}
          name="Text1"
          cols="40"
          rows="5"
          placeholder="It is a very good pokemon and it likes tangerines..."
        ></textarea>
      </section>

      <article className="descripcion">
        <button
          onClick={() => {
            checkNewPokemon();
            handleOpen();
          }}
        >
          Add
        </button>
        <div className="defensa">
          <h3>His color</h3>
          <input
            type="text"
            value={color}
            onChange={handleChangeColor}
            placeholder="Color"
          />
          <input
            type="text"
            value={type_two}
            onChange={handleChangeType_two}
            placeholder="Second type"
          />
          <input
            type="text"
            value={type_two_color}
            onChange={handleChangeType_two_color}
            placeholder="Second type color"
          />
        </div>
      </article>
      <div className="ataque">
        <h3>His basic stats</h3>
        <input
          type="text"
          value={hp}
          onChange={handleChangeHp}
          placeholder="HP"
        />
        <input
          type="text"
          value={atk}
          onChange={handleChangeAtk}
          placeholder="ATK"
        />
        <input
          type="text"
          value={def}
          onChange={handleChangeDef}
          placeholder="DEF"
        />
        <input
          type="text"
          value={satk}
          onChange={handleChangeSatk}
          placeholder="SATK"
        />
        <input
          type="text"
          value={sdef}
          onChange={handleChangeSdef}
          placeholder="SDEF"
        />
        <input
          type="text"
          value={spd}
          onChange={handleChangeSpd}
          placeholder="SPD"
        />
        <div>
         
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <body className="padre">
                <div className="modal">
                  <h1 id="tituloModal">Congratulations!</h1>
                  <h4>You just created a new Pokemon</h4>
                  <div className="botones">
                    <Link to={`/DetallePokemon/${name}`}>
                      <button>Look at it</button>
                    </Link>
                    <Link to={"/agregarPokemon"}>
                      <button>Create a new one</button>
                    </Link>
                    <Link to={"/"}>
                      <button>Go to the Pokedex</button>
                    </Link>
                  </div>
                  <p className="share">
                    Share your Pokemon:{" "}
                    {`http://localhost:3000/DetallePokemon/${name}`}
                  </p>
                </div>
              </body>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default AgregarPokemon;
