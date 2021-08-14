import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Categories from '../Categories/Categories';
import ic_shipping from '../../image/ic_shipping.png';
import { REGISTER_CATEGORIES } from '../../config';
import apiSearch from '../../apis/apiSearch';
import './SearchResults.scss';

/**
 * @decriptionFuntion Seach Results Component
 * @author Rafael Orlando Márquez Cedeño
 */

const SearchResults = () => {

    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const search = new URLSearchParams(location.search).get('search');

    const [results, setResults] = useState([]);
    const [consulted, setConsulted] = useState(false);

    useEffect(() => {
        const searchResults = async () => {
            const response = await apiSearch(search);
            setResults(response.results);
            dispatch({ type: REGISTER_CATEGORIES, datos: response.categories });
            setConsulted(true);
        };
        searchResults();
    }, [search, dispatch]);

    const productDetail = id => {
        history.push(`/items/${id}`);
    };

    return (consulted ? <>
        <Categories />
        <div className='main-container'>
            <div className='frame'>
                <div className='grid-primary'>
                    <div className='start-2 size-10'>

                        {results.map(element =>
                            <div className='grid-secondary background-white' key={`imagen_${element.id}`}>
                                <div className='start-1 size-2 '>
                                    <img onClick={() => productDetail(element.id)} className='result-image little-hand' alt='' src={element.picture} />
                                </div>
                                <div className='size-6 '>
                                    <div className='result-price'>
                                        <div className='price font-24 '>
                                            {element.price.currency} {element.price.decimals} {element.free_shipping ? <img alt='' src={ic_shipping} /> : <></>}
                                        </div>
                                        <div className='font-18 line-spacing little-hand' onClick={() => productDetail(element.id)}>{element.title}</div>
                                    </div>

                                </div>

                                <div className='size-2 '>
                                    <div className='result-location'>
                                        <p className='font-12'>{element.state_name}</p>
                                    </div>
                                </div>
                                <div className='start-1 size-10 '>
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

export default SearchResults;
