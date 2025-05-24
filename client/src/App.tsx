import React from "react";
import { Route, Switch, Redirect } from "wouter";
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import Profile from "@/pages/Profile";

// Simule o login do admin aqui
const isAdmin = false; // Troque para true para testar painel do dono

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/cart" component={Cart} />
      {isAdmin && <Route path="/profile" component={Profile} />}
      <Route> {/* Página não encontrada */}
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}