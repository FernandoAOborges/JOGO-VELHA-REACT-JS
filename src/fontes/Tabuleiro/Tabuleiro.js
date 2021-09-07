import React, { useState, useEffect, useCallback } from "react";
import "./Tabuleiro.css";
import { useHistory } from "react-router-dom";

const Tabuleiro = () => {
  const history = useHistory();
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
  const [marcacaoCelulas] = useState(["x", "o"]);

  const [textoVencedor] = useState("Vencedor");

  const verificaVitoria = useCallback(() => {
    const posicaoVitoria = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < posicaoVitoria.length; index++) {
      let sequencias = posicaoVitoria[index];
      let coluna1 = sequencias[0];
      let coluna2 = sequencias[1];
      let coluna3 = sequencias[2];

      if (
        tabuleiro[coluna1] === tabuleiro[coluna2] &&
        tabuleiro[coluna1] === tabuleiro[coluna3] &&
        tabuleiro[coluna1] !== ""
      ) {
        return true;
      }
    }

    return false;
  }, [tabuleiro]);

  const moverPecas = useCallback(
    (elemento) => {
      if (elemento) {
        if (verificaVitoria()) return;

        const arraySuporte = [...tabuleiro];
        setElementoClicado(elemento);
        const { id } = elemento.target;

        arraySuporte[id] = marcacaoCelulas[jogadores];
        jogadores === 0 ? setJogadores(1) : setJogadores(0);
        setTabuleiro(arraySuporte);
      }
    },
    [jogadores, marcacaoCelulas, tabuleiro, verificaVitoria]
  );

  const marcaCelulas = useCallback(() => {
    if (elementoClicado) {
      const { id } = elementoClicado.target;

      let MarcacaoTabuleiro = tabuleiro[id];

      elementoClicado.target.innerHTML = `<h1>${MarcacaoTabuleiro}</h1>`;
    }
  }, [elementoClicado, tabuleiro]);

  useEffect(() => {
    marcaCelulas();
  }, [marcaCelulas]);

  const retornaCelula = (index) => (
    <div
      id={index}
      className="celulas"
      onClick={(event) => moverPecas(event)}
    ></div>
  );

  const retornaVencedor = () => {
    let jogador = jogadores !== 0 ? "X" : "O";

    return <h2>{`${textoVencedor} jogador: "${jogador}" `} </h2>;
  };

  return (
    <div className="conteiner">
      {verificaVitoria() ? retornaVencedor() : null}
      <div className="controles">
        <h3 onClick={() => history.push("/")}>⬅️</h3>
        <h1>JOGO</h1>

        <button
          className={verificaVitoria() ? "botaoResetar" : "botaoResetar fechar"}
          onClick={() => history.push("/")}
        >
          RESETAR
        </button>
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
