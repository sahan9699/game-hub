import axios from "axios";

export interface FetchResponce<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1caffd86461d414dbc9844baacb831ff'
    }
})