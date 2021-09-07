import React, { useState, useEffect, useCallback } from "react";
import "./Tabuleiro.css";

const Tabuleiro = () => {
  const [elementoClicado, setElementoClicado] = useState(null);
  const [tabuleiro, setTabuleiro] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [jogadores, setJogadores] = useState(0);
  const [marcacaoCelulas, setMarcacaoCelulas] = useState(["x", "o"]);
  const [fimJogo, setFimJogo] = useState(false);

  // console.log(tabuleiro);

  const moverPecas = useCallback(
    (elemento) => {
      // setElementoClicado(null);
      if (elemento) {
        if (fimJogo) return;

        const arraySuporte = [...tabuleiro];
        setElementoClicado(elemento);
        const { id } = elemento.target;

        arraySuporte[id] = marcacaoCelulas[jogadores];
        jogadores === 0 ? setJogadores(1) : setJogadores(0);
        setTabuleiro(arraySuporte);
      }
    },
    [jogadores, marcacaoCelulas, tabuleiro, fimJogo]
  );

  const marcaCelulas = useCallback(() => {
    if (elementoClicado) {
      const { id, innerHTML } = elementoClicado.target;

      let MarcacaoTabuleiro = tabuleiro[id];

      elementoClicado.target.innerHTML = `<h1>${MarcacaoTabuleiro}</h1>`;
    }
  }, [elementoClicado, tabuleiro]);

  useEffect(() => {
    marcaCelulas();
  }, [marcaCelulas]);

  // console.log(marcacaoCelulas);

  const retornaCelula = (index) => (
    <div
      id={index}
      className="celulas"
      onClick={(event) => moverPecas(event)}
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
