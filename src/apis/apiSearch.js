import axios from 'axios';
import { URL_SEARCH, RESULTS_NUMBER } from '../config';

const apiSearch = async (search) => {
    try {
        const results = await axios.get(`${URL_SEARCH}${search}`, { headers: { quantity: RESULTS_NUMBER } });
        if (results.data.items.length > 0) {
            return { results: results.data.items, categories: results.data.categories };
        } else {
            return { results: [], categories: [] };
        }
    } catch {
        return { results: [], categories: [] };
    }
};

export default apiSearch;
