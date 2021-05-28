import React from 'react';
import { useSelector } from 'react-redux';
import './Categorias.scss';

const Categorias = () => {

    const categorias = useSelector(state => state.categorias);

    return <>
        <div className='contenedor'>
            <div className='marco'>
                <div className='cuadricula-primaria'>
                    <div className='inicia-2 mide-10'>
                        <div className='categorias'>
                            {
                                !!categorias && categorias.map((element, index) =>
                                    <div className='fuente-14 letras-gris' key={`cat_${index}`}> {index !== 0 ? '>' : ''} {element}&nbsp;</div>)
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
