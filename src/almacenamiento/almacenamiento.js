
import { createStore } from 'redux';

const initialState =
{
  buscar: '',
  idProducto: '',
  categorias: [],
};

const reducerMercadoLibre = (state = initialState, action) => {

  switch (action.type) {
    case 'REGISTRAR_CATEGORIAS':
      return {
        ...state,
        categorias: action.datos,
      };

    case 'REGISTRAR_BUSQUEDA':
      return {
        ...state,
        buscar: action.datos,
      };

    case 'REGISTRAR_ID_PRODUCTO':
      return {
        ...state,
        idProducto: action.datos,
      };

    default:
      return state;
  }
};
export default createStore(reducerMercadoLibre);
