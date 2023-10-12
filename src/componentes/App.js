import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./css/App.css"
import Menu from './Menu';
import Inicio from './Inicio';
import Login from './Login';
import Registro from './Registro';
import Producto from './Producto';
import AgregarProductos from './Agregar';
import Tipo from './Tipo';
import Actualizar from './Actualizar';
import Eliminar from './Eliminar';
import Carrito from './Carrito';
import Layout from './Layout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [usuario, setUsuario] = useState(null);

  const addToCart = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const removeFromCart = (productId) => {
    const updatedCarrito = [...carrito];
    const index = updatedCarrito.findIndex((producto) => producto._id === productId);
  
    if (index !== -1) {
      updatedCarrito.splice(index, 1);
      setCarrito(updatedCarrito);
    }
  };
  

  return (
    <div className="App">
      <Menu isAuthenticated={isAuthenticated} />
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio isAuthenticated={isAuthenticated} />} />
          <Route path="/productos/:tipo" element={<Tipo />} />
          <Route path="/productos/detalle/:id" element={<Producto isAuthenticated={isAuthenticated} addToCart={addToCart} usuario={usuario} />} />
          <Route path="/carrito" element={<Carrito carrito={carrito} removeFromCart={removeFromCart} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} setUsuario={setUsuario} />} />
          <Route path="/registro" element={<Registro setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/agregarProductos" element={<AgregarProductos isAuthenticated={isAuthenticated} />} />
          <Route path="/productos/actualizarProducto/:id" element={<Actualizar isAuthenticated={isAuthenticated} />} />
          <Route path="/productos/borrarProducto/:id" element={<Eliminar isAuthenticated={isAuthenticated} />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
