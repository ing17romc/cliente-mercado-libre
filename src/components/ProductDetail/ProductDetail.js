import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import apiDetail from '../../apis/apiDetail';
import Categories from '../Categories/Categories';
import './ProductDetail.scss';

const ProductDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    const [consulted, setConsulted] = useState(false);
    const [productDetail, setProductDetail] = useState({
        id: '',
        title: '',
        price: {
            currency: '',
            decimals: '',
        },
        picture: '',
        condition: '',
        free_shipping: '',
        sold_quantity: '',
        description: '',
    });

    useEffect(() => {
        const getProductDetail = async () => {
            const results = await apiDetail(id);
            if (Object.entries(results).length !== 0) {
                setProductDetail(results);
                setConsulted(true);
            }
        };
        getProductDetail();
    }, [id, dispatch]);

    const titleButton = 'Comprar';
    const text = 'vendidos';
    const titleDescripcion = 'Descripción del producto';

    return (consulted ?
        <>
            <Categories />
            <div className='main-container'>
                <div className='frame'>
                    <div className='grid-primary'>
                        <div className='start-2 size-10'>
                            <div className='grid-secondary background-white'>
                                <div className='start-1 size-7'>
                                    <div className='image-detail'>
                                        <img alt='imagen' src={productDetail.picture} />
                                    </div>
                                </div>
                                <div className='size-3'>
                                    <div className='price-detail'>
                                        <div className='condition font-14'>{productDetail.condition} - {productDetail.sold_quantity} {text} </div>
                                        <div className='title line-spacing font-24'>{productDetail.title}</div>
                                        <div className='price font-46'>{productDetail.price.currency} {productDetail.price.decimals}</div>
                                        <button className='font-16 '> {titleButton} </button>
                                    </div>
                                </div>
                                <div className='start-1 size-10 last-row' />
                                <div className='start-1 size-7'>
                                    <div className='description-detail'>
                                        <div className='font-28'>{titleDescripcion}</div>
                                        <div className='font-16 gray-font line-spacing'>{productDetail.description}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> :
        <div></div>);
};

export default ProductDetail;
