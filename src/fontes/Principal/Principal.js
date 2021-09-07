import React from "react";
import { useHistory } from "react-router-dom";

import "./Principal.css";
import velha from "../../img/velha.PNG";

const Principal = () => {
  const history = useHistory();
  return (
    <div className="container">
      <h1 className="titulo">Escolha o jogo</h1>
      <div className="imagem">
        <img
          src={velha}
          alt="jogo_velha"
          onClick={() => history.push("/velha")}
        />
      </div>
    </div>
  );
};

export default Principal;
