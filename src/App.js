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
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [NotifCart, setNotifCart] = useState(false)
    function showNotif_cart() {
        setNotifCart(true)
        setTimeout(() => {
            setNotifCart(false)
        }, 3000);
    }

  return (
    <>
      <Router>
          <Routes>
              <Route path="/" element={
                <Home 
                count={count} 
                setCount={setCount} 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                favoriteItems={favoriteItems} 
                setFavoriteItems={setFavoriteItems} 
                NotifCart={NotifCart} 
                setNotifCart={setNotifCart} 
                showNotif_cart={showNotif_cart}
                />
              }>
              </Route>

              <Route path="/login" element={
                <Login />}>
              </Route>

              <Route path="/carrinho" element={
                <Carrinho 
                count={count} 
                cartItems={cartItems} 
                setCartItems={setCartItems} 
                setCount={setCount}
                />
                }>
              </Route>

              <Route path="/favoritos" element={
                <Favoritos 
                count={count} 
                favoriteItems={favoriteItems} 
                setFavoriteItems={setFavoriteItems}
                setCount={setCount} 
                cartItems={cartItems} 
                setCartItems={setCartItems}
                NotifCart={NotifCart} 
                setNotifCart={setNotifCart} 
                showNotif_cart={showNotif_cart}
                />
                }>
              </Route>

              <Route path="/contato" element={
                <Contato />}>
              </Route>    
          </Routes>
      </Router>
    </>
  )
}

export default App;
