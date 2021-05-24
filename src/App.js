
import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CajaBusquedas from './componentes/CajaBusquedas/CajaBusquedas';
import ResultadosBusqueda from "./componentes/ResultadosBusqueda/ResultadosBusqueda";
import DetallePrducto from "./componentes/DetalleProducto/DetalleProducto";
import './App.scss';


function App() {
  return (
    <Router>
      <Route path='/' component={CajaBusquedas} />
      <Route exact path='/items' component={ResultadosBusqueda} />
      <Route exact path='/items/:id' component={DetallePrducto} />
    </Router>
  );
}

export default App;
