import axios from 'axios';
import { URL_BUSQUEDA, NUMERO_RESULTADOS } from '../config';

const apiBuscar = async (buscar) => {
    try {
        const resultados = await axios.get(`${URL_BUSQUEDA}${buscar}`, { headers: { quantity: NUMERO_RESULTADOS } });
        if (resultados.data.items.length > 0) {
            return { resultados: resultados.data.items, categorias: resultados.data.categories };
        } else {
            return { resultados: [], categorias: [] };
        }
    } catch {
        return { resultados: [], categorias: [] };
    }
};

export default apiBuscar;
