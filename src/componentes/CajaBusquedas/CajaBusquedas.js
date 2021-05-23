import React, { useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import './CajaBusquedas.scss';

const CajaBusquedas = () => {

    const history = useHistory();
    const location = useLocation();
    const search = new URLSearchParams(location.search).get('search');

    const [_search, setstate] = useState(search?search:'');

    const eventoBuscar = (e) => {
        console.log(_search);
        history.push({ pathname: '/items', search: '?search=' + _search });
        e.preventDefault();
    };

    const eventoCambioBusqueda = e => {
        setstate(e.target.value);
    };

    return <form className='cuadricula fondo-amarillo relleno-vertical' onSubmit={eventoBuscar}>
        <div className='inicia-2 mide-1'>
            <img className='logo-ml' alt='Logo_ML.png' src='/imagenes/Logo_ML.png' />
        </div>
        <div className='inicia-3 mide-9'>
            <input className='caja-busqueda' type="search" placeholder='Nunca dejes de buscar' value={_search} onChange={eventoCambioBusqueda} />
            <img className ='icono-busqueda' alt='ic_Search.png' src='/imagenes/ic_Search.png' />
        </div>
    </form>;
}

export default CajaBusquedas;
