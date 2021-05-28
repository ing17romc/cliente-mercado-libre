import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import apiDetalle from '../../apis/apiDetalle';
import Categorias from '../Categorias/Categorias';
import './DetalleProducto.scss';

const DetalleProducto = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const [consultado, setConsultado] = useState(false);

    const [detalleProducto, setDetalleProducto] = useState({
        identificador: '',
        titulo: '',
        precio: {
            divisa: '',
            valor: '',
        },
        imagen: '',
        condicion: '',
        envio_gratis: '',
        cantidad_vendida: '',
        descripcion: '',
    });

    useEffect(() => {
        const apiBusqueda = async () => {
            const resultados = await apiDetalle(id);
            if (Object.entries(resultados).length !== 0) {
                setDetalleProducto(resultados);
                setConsultado(true);
            }
        };
        apiBusqueda();
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
                                        <img alt='imagen' src={detalleProducto.imagen} />
                                    </div>
                                </div>
                                <div className='mide-3'>
                                    <div className='detalle-precio'>
                                        <div className='condicion fuente-14'>{detalleProducto.condicion} - {detalleProducto.cantidad_vendida} vendidos </div>
                                        <div className='titulo inter-lineado fuente-24'>{detalleProducto.titulo}</div>
                                        <div className='precio fuente-46'>{detalleProducto.precio.divisa} {detalleProducto.precio.valor}</div>
                                        <button className='fuente-16 '> Comprar </button>
                                    </div>
                                </div>
                                <div className='inicia-1 mide-10 ultima-fila' />
                                <div className='inicia-1 mide-7'>
                                    <div className='detalle-descripcion'>
                                        <div className='fuente-28'>Descripción del producto</div>
                                        <div className='fuente-16 letras-gris inter-lineado'>{detalleProducto.descripcion}</div>
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
