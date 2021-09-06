import React, { useState } from "react";
import "./Tabuleiro.css";

const Tabuleiro = () => {
  const [posicaoClicada, setPosicaoClicada] = useState(null);

  console.log(posicaoClicada);

  const retornaCelula = (index) => (
    <div
      id={index}
      className="celulas"
      onClick={(event) => setPosicaoClicada(event.target.id)}
    ></div>
  );

  return (
    <div className="conteiner">
      <div className="controles">
        <h1>JOGO</h1>
        <button>RESETAR</button>
      </div>

      <div>
        {retornaCelula(0)}
        {retornaCelula(1)}
        {retornaCelula(2)}
      </div>
      <div>
        {retornaCelula(3)}
        {retornaCelula(4)}
        {retornaCelula(5)}
      </div>
      <div>
        {retornaCelula(6)}
        {retornaCelula(7)}
        {retornaCelula(8)}
      </div>
    </div>
  );
};

export default Tabuleiro;
