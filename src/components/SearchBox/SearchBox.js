import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './SearchBox.scss';
import MLlogo from '../../image/Logo_ML.png';

/**
 * @decriptionFuntion Search Box Component
 * @author Rafael Orlando Márquez Cedeño
 */

const SearchBox = () => {

    const history = useHistory();
    const location = useLocation();

    const search = new URLSearchParams(location.search).get('search');

    const [value, setValue] = useState(search ? search : '');

    const eventSearch = e => {
        history.push({ pathname: '/items', search: `?search=${value}` });
        e.preventDefault();
    };

    const eventChangeSearch = e => {
        setValue(e.target.value);
    };

    const placeHolder = 'Nunca dejes de buscar';

    return <>
        <div className='main-container background-yellow'>
            <div className='frame'>

                <form className='grid-primary padding-component-search-box' onSubmit={eventSearch}>
                    <div className='start-2 size-1'>
                        <img className='logo-ml' alt='Logo_ML.png' src={MLlogo} />
                    </div>
                    <div className='start-3 size-9'>
                        <div className='input-icon '>
                            <input type='search' placeholder={placeHolder} value={value} onChange={eventChangeSearch} />
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </>;
};

export default SearchBox;
