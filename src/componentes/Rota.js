import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tabuleiro from "../fontes/Tabuleiro/Tabuleiro";
import Principal from "../fontes/Principal/Principal";

const Rota = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Principal />
        </Route>
        <Route path="/velha">
          <Tabuleiro />
        </Route>
      </Switch>
    </Router>
  );
};

export default Rota;
