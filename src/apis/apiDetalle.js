import axios from 'axios';
import { URL_DETALLE_PRODUCTO } from '../config';

const apiDetalle = async (id) => {
    try {
        const resultados = await await axios.get(`${URL_DETALLE_PRODUCTO}${id}`);
        if (resultados.data.item) {
            return {
                identificador: resultados.data.item.id,
                titulo: resultados.data.item.titulo,
                precio: {
                    divisa: resultados.data.item.price.currency,
                    valor: resultados.data.item.price.decimals,
                },
                imagen: resultados.data.item.picture,
                condicion: resultados.data.item.condition,
                envio_gratis: resultados.data.item.free_shipping,
                cantidad_vendida: resultados.data.item.sold_quantity,
                descripcion: resultados.data.item.description,
            };
        } else {
            return {};
        }
    } catch {
        return {};
    }
};

export default apiDetalle;
