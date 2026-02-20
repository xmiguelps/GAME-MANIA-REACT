import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Carrinho from "./pages/Carrinho";
import Favoritos from "./pages/Favoritos";
import Login from "./pages/Login";
import Contato from "./pages/Contato";
import Home from "./pages/Home";

import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={<Home count={count} setCount={setCount} cartItems={cartItems} setCartItems={setCartItems} />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/carrinho" element={<Carrinho count={count} cartItems={cartItems} />}></Route>
              <Route path="/favoritos" element={<Favoritos count={count} />}></Route>
              <Route path="/contato" element={<Contato />}></Route>    
          </Routes>
      </Router>
    </>
  )
}

export default App;
