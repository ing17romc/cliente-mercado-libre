
import { createStore } from 'redux';
import { REGISTRAR_CATEGORIAS } from '../config';

const initialState =
{
  categorias: [],
};

const mercadoLibre = (state = initialState, action) => {

  switch (action.type) {
    case REGISTRAR_CATEGORIAS:
      return {
        ...state,
        categorias: action.datos,
      };

    default:
      return state;
  }
};
export default createStore(mercadoLibre);
