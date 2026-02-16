import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Carrinho from "./pages/Carrinho";
import Favoritos from "./pages/Favoritos";
import Login from "./pages/Login";
import Contato from "./pages/Contato";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/carrinho" element={<Carrinho />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route>
            <Route path="/contato" element={<Contato />}></Route>    
        </Routes>
    </Router>
    </>
  )
}

export default App;
