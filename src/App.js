import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListadoContenedor from './Componentes/Item/ItemListadoContenedor'
import ItemDetailContenedor from './Componentes/Item/ItemDetailContenedor';
import Cart from './Componentes/Carro/Cart';
import CartContextProvider from './Componentes/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListadoContenedor />} />
          <Route exact path="/categoria/:categoryId" element={<ItemListadoContenedor />} />
          <Route exact path="/detalle/:id" element={<ItemDetailContenedor />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;