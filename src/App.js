import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bulma/css/bulma.css";
import "./css/Style.css";

import Home from './pages/Home';
import Promociones from './pages/Promociones';
import Error from './pages/Error';
import ItemListContainer from "./pages/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartProvider } from './components/CartContext';
import CartWidget from "./components/CartWidget";
import RegisterForm from './pages/RegisterForm';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSubmitSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        
        <Routes>
          <Route path="/" element={<Home/>} >
            <Route path="galeria" element={<ItemListContainer/>} />
            <Route path="category/:id" element={<ItemListContainer />} />
            <Route path="galeria/:codigo" element={<ItemDetailContainer />} />
            <Route path="promociones" element={<Promociones />} />
            <Route path="registrarse" element={<RegisterForm onSubmitSuccess={handleSubmitSuccess} isAuthenticated={isAuthenticated} />} />
            <Route path="cart" element={<CartWidget />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>

  );
}
export default App;
