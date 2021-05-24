import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory, } from 'react-router-dom';
import axios from 'axios';
import './DetalleProducto.scss';

const DetalleProducto = () => {

    const { id } = useParams();
    const location = useLocation();
    const history = useHistory();

    const { categorias, search } = location.state;

    const [state, setstate] = useState({
        id: '',
        title: '',
        price: {
            currency: '',
            amount: '',
            decimals: '',
        },
        picture: '',
        condition: '',
        free_shipping: '',
        sold_quantity: '',
        description: '',
    });


    useEffect(() => {
        const apiBusqueda = async () => {
            try {
                const resultados = await axios.get(`${process.env.REACT_APP_URL_DETALLE_PRODUCTO}${id}`);
                setstate(resultados.data.item);
            } catch {
                setstate({
                    id: '',
                    title: '',
                    price: {
                        currency: '',
                        amount: '',
                        decimals: '',
                    },
                    picture: '',
                    condition: '',
                    free_shipping: '',
                    sold_quantity: '',
                    description: '',
                });
            }
        };
        apiBusqueda();
        return () => { };
    }, [id]);

    const regresarListado = e => {
        history.push({ pathname: '/items', search: `?search=${search}` });
        e.preventDefault();
    };


    return <div className='cuadricula'>
        <div className='inicia-2 mide-10 relleno-vertical-menu'>
            <label className='manito' onClick={regresarListado}> Volver al listado </label> |
            {
                categorias.map((element, index) => <label key={`cat_${index}`}> {`${element} > `} </label>)
            }
        </div>
        <div className='inicio-1 mide-8 fondo-blanco'>
            <img className='imagen-detalle' alt='imagen' src={state.picture} />
        </div>
        <div className='mide-3 fondo-blanco'>
            {state.condition} - {state.sold_quantity} vendidos
            <br></br>
            <h3>{state.title}</h3>
            <h5>{state.id}</h5>
            <br></br>
            <h4>{state.price.decimals}</h4>
            <br></br>
            <button>Comprar</button>
        </div>
        <div className='inicio-1 mide-11 '>
            <h3>Descripción del producto</h3>
            <h4>{state.description}</h4>
        </div>
    </div>;
};

export default DetalleProducto;
