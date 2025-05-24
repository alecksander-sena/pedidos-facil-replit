import React from "react";
import { CartProvider } from "@/context/CartContext";
import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import { Route, Switch } from "wouter";

function App() {
  return (
    <CartProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </CartProvider>
  );
}

export default App;