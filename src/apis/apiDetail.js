import axios from 'axios';
import {URL_DETAIL_PRODUCT } from '../config';

const apiDetail = async (id) => {
    try {
        const results = await await axios.get(`${URL_DETAIL_PRODUCT}${id}`);
        if (results.data.item) {
            return results.data.item;
        } else {
            return {};
        }
    } catch {
        return {};
    }
};

export default apiDetail;
