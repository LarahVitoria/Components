import React from "react";
import Chip from "./components/chip";
import Ballon from "./components/ballon";
import Cards from "./components/card";
import Dropdown from "./components/dropdown";
import avatar from "./assets/avatar.png";

function App() {
  const selectedOption = (option) => console.log(option);
  return (
    <div className="App">
      <Chip avatar={avatar}>Lara</Chip>
      <Ballon toolTipText="mensagem quando passa o mouse">
        Passe o mouse em cima
      </Ballon>
      <Cards
        name="Lara"
        avatar={avatar}
        tel="(15) 99999-9999"
        email="larahvitoria15@gmail.com"
      />
      <Dropdown
        options={[
          { id: 1, value: "Option1" },
          { id: 2, value: "Option2" },
          { id: 3, value: "Option3" },
        ]}
        selectedOption={selectedOption}
        placeholder="Selecione uma opção"
      />
    </div>
  );
}

export default App;
