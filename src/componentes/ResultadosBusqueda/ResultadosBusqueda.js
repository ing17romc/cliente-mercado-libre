import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import './ResultadosBusqueda.scss'

const ResultadosBusqueda = () => {

    const location = useLocation();
    const search = new URLSearchParams(location.search).get('search');

    const [state, setstate] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const apiBusqueda = async () => {
            try {
                const resultados = await axios.get(process.env.REACT_APP_URL_BUSQUEDA + search);
                if (resultados.data.items.length > 0) {
                    setstate(resultados.data.items)
                    setCategorias(resultados.data.categories)
                }
                else {
                    setstate([]);
                    setCategorias([])
                }
            }
            catch {
                setstate([]);
            }
        };
        apiBusqueda();
        return () => { };
    }, [search]);



    return <div className='cuadricula '>
        <div className='inicia-2 mide-10 relleno-vertical-menu'>
            {
                categorias.map((element, index) => <label key={'cat_' + index}> {element + ' >'} </label>)
            }
        </div>
        {

            state.map(elemento =>

                <div className='inicia-2 mide-10 fondo-blanco' key={elemento.id}>
                    
                    <div className='detalle'>
                        <div>
                            <img className='imagen' alt='imagen' src={elemento.picture} />
                        </div>
                        <div>
                            <h3> {elemento.price.decimals} {elemento.free_shipping ? 'envio gratis' : ''}</h3>
                            <h4>{elemento.title}</h4>
                        </div>
                        <div>
                            <h4>{elemento.state_name}</h4>
                        </div>
                    </div>
                    <hr></hr>
                </div>

            )
        }
    </div>
}

export default ResultadosBusqueda;
