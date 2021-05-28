import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Categorias from '../Categorias/Categorias';
import iconoEnvioGratis from '../../image/ic_shipping.png';
import { REGISTRAR_CATEGORIAS } from '../../config';
import apiBuscar from '../../apis/apiBuscar';
import './ResultadosBusqueda.scss';

const ResultadosBusqueda = () => {

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const buscar = new URLSearchParams(location.search).get('search');

    const [resultados, setResultados] = useState([]);
    const [consultado, setConsultado] = useState(false);

    useEffect(() => {
        const bucarResultados = async () => {
            const respuesta = await apiBuscar(buscar);
            setResultados(respuesta.resultados);
            dispatch({ type: REGISTRAR_CATEGORIAS, datos: respuesta.categorias });
            setConsultado(true);
        };
        bucarResultados();
    }, [buscar, dispatch]);

    const detalleProducto = id => {
        history.push(`/items/${id}`);
    };

    return (consultado ? <>
        <Categorias />
        <div className='contenedor'>
            <div className='marco'>
                <div className='cuadricula-primaria'>
                    <div className='inicia-2 mide-10'>

                        {resultados.map(elemento =>
                            <div className='cuadricula-secundaria fondo-blanco' key={`imagen_${elemento.id}`}>
                                <div className='inicia-1 mide-2 '>
                                    <img onClick={() => detalleProducto(elemento.id)} className='resultado-imagen manito' alt='imagen' src={elemento.picture} />
                                </div>
                                <div className='mide-6 '>
                                    <div className='resultado-precio'>
                                        <div className='precio fuente-24 '>
                                            {elemento.price.currency} {elemento.price.decimals} {elemento.free_shipping ? <img alt='envio-gratis' src={iconoEnvioGratis} /> : <></>}
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
