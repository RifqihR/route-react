import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Produk from "./page/Produk";

export default function Rout() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Cart">
          <Cart />
        </Route>
        <Route exact path={"/Produk"}>
          <Produk />
        </Route>
      </Switch>
    </Router>
  );
}
