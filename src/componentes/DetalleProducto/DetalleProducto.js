import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Categorias from '../Categorias/Categorias';
import './DetalleProducto.scss';


const DetalleProducto = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const [consultado, setConsultado] = useState(false);

    const [detalleProducto, setDetalleProducto] = useState({
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
                setDetalleProducto(resultados.data.item);
            } catch {
                setDetalleProducto({
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
            dispatch({ type: 'REGISTRAR_ID_PRODUCTO', datos: id });
            setConsultado(true);
        };
        apiBusqueda();
        return () => dispatch({ type: 'REGISTRAR_ID_PRODUCTO', datos: '' });
    }, [id, dispatch]);

    return (consultado ?
        <>
            <Categorias />
            <div className='contenedor'>
                <div className='marco'>
                    <div className='cuadricula-primaria'>
                        <div className='inicia-2 mide-10'>
                            <div className='cuadricula-secundaria fondo-blanco'>
                                <div className='inicia-1 mide-7'>
                                    <div className='detalle-imagen'>
                                        <img alt='imagen' src={detalleProducto.picture} />
                                    </div>
                                </div>
                                <div className='mide-3'>
                                    <div className='detalle-precio'>
                                        <div className='condicion fuente-14'>{detalleProducto.condition} - {detalleProducto.sold_quantity} vendidos</div>
                                        <div className='titulo inter-lineado fuente-24'>{detalleProducto.title}</div>
                                        <div className='precio fuente-46'>{detalleProducto.price.decimals}</div>
                                        <button className='fuente-16 '>
                                            Comprar
                                    </button>
                                    </div>
                                </div>
                                <div className='inicia-1 mide-10 ultima-fila' />
                                <div className='inicia-1 mide-10'>
                                    <div className='detalle-descripcion'>
                                        <div className='fuente-28'>Descripción del producto</div>
                                        <div className='fuente-16 letras-gris inter-lineado'>{detalleProducto.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> :
        <div></div>);
};

export default DetalleProducto;
