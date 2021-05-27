import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Categorias = () => {

    const history = useHistory();
    const categorias = useSelector(state => state.categorias);
    const idProducto = useSelector(state => state.idProducto);
    const buscar = useSelector(state => state.buscar);

    const regresarListado = e => {
        history.push({ pathname: '/items', search: `?search=${buscar}` });
        e.preventDefault();
    };

    return <>
        <div className='contenedor'>
            <div className='marco'>
                <div className='cuadricula-primaria'>
                    <div className='inicia-2 mide-10'>
                        <div className='categorias'>
                            {
                                !!idProducto && <p className='fuente-14 letras-gris manito' onClick={regresarListado}> Volver al listado |  </p>
                            }
                            {
                               !!categorias && categorias.map((element, index) => <p className='fuente-14 letras-gris' key={`cat_${index}`}> {` ${element} >  `} </p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
        ;
};

export default Categorias;
