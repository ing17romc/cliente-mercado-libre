import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Categorias from '../Categorias/Categorias';
import iconoEnvioGratis from '../../imagenes/ic_shipping.png';
import './ResultadosBusqueda.scss';

const ResultadosBusqueda = () => {

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const search = new URLSearchParams(location.search).get('search');

    const [state, setstate] = useState([]);
    const [consultado, setConsultado] = useState(false);

    useEffect(() => {
        const apiBusqueda = async () => {
            try {
                dispatch({ type: 'REGISTRAR_BUSQUEDA', datos: search });
                const resultados = await axios.get(`${process.env.REACT_APP_URL_BUSQUEDA}${search}`);
                if (resultados.data.items.length > 0) {
                    setstate(resultados.data.items);
                    dispatch({ type: 'REGISTRAR_CATEGORIAS', datos: resultados.data.categories });
                } else {
                    setstate([]);
                    dispatch({ type: 'REGISTRAR_CATEGORIAS', datos: [] });
                }
                dispatch({ type: 'REGISTRAR_BUSQUEDA', datos: search });
            } catch {
                setstate([]);
                dispatch({ type: 'REGISTRAR_CATEGORIAS', datos: [] });
            }
            setConsultado(true);
        };
        apiBusqueda();
        return () => { };
    }, [search, dispatch]);

    const detalleProducto = id => {
        history.push(`/items/${id}`);
    };

    return (consultado ?<>
        <Categorias />
        <div className='contenedor'>
            <div className='marco'>
                <div className='cuadricula-primaria'>
                    <div className='inicia-2 mide-10'>

                        {state.map(elemento =>
                            <div className='cuadricula-secundaria fondo-blanco' key={`imagen_${elemento.id}`}>
                                <div className='inicia-1 mide-2 '>
                                    <img onClick={() => detalleProducto(elemento.id)} className='resultado-imagen manito' alt='imagen' src={elemento.picture} />
                                </div>
                                <div className='mide-6 '>
                                    <div className='resultado-precio'>
                                        <div className='precio fuente-24 '>
                                            {elemento.price.decimals} {elemento.free_shipping ? <img alt='envio-gratis' src={iconoEnvioGratis} /> : <></>}
                                        </div>
                                        <div className='fuente-18 inter-lineado manito' onClick={() => detalleProducto(elemento.id)}>{elemento.title}</div>
                                    </div>

                                </div>

                                <div className='mide-2 '>
                                    <div className='resultado-ubicacion'>
                                        <p className='fuente-12'>{elemento.state_name}</p>
                                    </div>
                                </div>
                                <div className='inicia-1 mide-10 '>
                                    <hr></hr>
                                </div>
                            </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
        </> :
        <div></div>);
};

export default ResultadosBusqueda;
