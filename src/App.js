
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CajaBusquedas from './componentes/CajaBusquedas/CajaBusquedas';
import ResultadosBusqueda from './componentes/ResultadosBusqueda/ResultadosBusqueda';
import DetallePrducto from './componentes/DetalleProducto/DetalleProducto';
import { Provider } from 'react-redux';
import store from './almacenamiento/almacenamiento';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' component={CajaBusquedas} />
        <Route exact path='/items' component={ResultadosBusqueda} />
        <Route exact path='/items/:id' component={DetallePrducto} />
      </Router>
    </Provider>
  );
}

export default App;
