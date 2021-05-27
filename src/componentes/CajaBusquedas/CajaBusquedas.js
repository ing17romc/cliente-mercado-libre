import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './CajaBusquedas.scss';

import logoML from '../../imagenes//Logo_ML.png';

const CajaBusquedas = () => {

    const history = useHistory();
    const location = useLocation();

    const search = new URLSearchParams(location.search).get('search');

    const [_search, setstate] = useState(search ? search : '');

    const eventoBuscar = e => {
        history.push({ pathname: '/items', search: `?search=${_search}` });
        e.preventDefault();
    };

    const eventoCambioBusqueda = e => {
        setstate(e.target.value);
    };


    return <>
        <div className='contenedor fondo-amarillo'>
            <div className='marco'>

                <form className='cuadricula-primaria relleno-vertical' onSubmit={eventoBuscar}>
                    <div className='inicia-2 mide-1'>
                        <img className='logo-ml' alt='Logo_ML.png' src={logoML} />
                    </div>
                    <div className='inicia-3 mide-9'>
                        <div className='input-icono '>
                            <input type='search' placeholder='Nunca dejes de buscar' value={_search} onChange={eventoCambioBusqueda} />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </>
        ;
};

export default CajaBusquedas;
