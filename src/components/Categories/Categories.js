import React from 'react';
import { useSelector } from 'react-redux';
import './Categories.scss';

/**
 * @decriptionFuntion Categories Component
 * @author Rafael Orlando Márquez Cedeño
 */

const Categories = () => {

    const categories = useSelector(state => state.categories);

    return <>
        <div className='main-container'>
            <div className='frame'>
                <div className='grid-primary'>
                    <div className='start-2 size-10'>
                        <div className='categories'>
                            {
                                !!categories && categories.map((element, index) =>
                                    <div className='font-14 gray-font' key={`cat_${index}`}> {index !== 0 ? '>' : ''} {element}&nbsp;</div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Categories;
