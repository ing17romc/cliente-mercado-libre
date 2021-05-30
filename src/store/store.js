
import { createStore } from 'redux';
import { REGISTER_CATEGORIES } from '../config';

const initialState =
{
  categories: [],
};

/**
 * @decriptionFuntion ML store
 * @author Rafael Orlando Márquez Cedeño
 */

const mercadoLibre = (state = initialState, action) => {

  switch (action.type) {
    case REGISTER_CATEGORIES:
      return {
        ...state,
        categories: action.datos,
      };

    default:
      return state;
  }
};
export default createStore(mercadoLibre);
