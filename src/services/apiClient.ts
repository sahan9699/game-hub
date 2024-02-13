import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponce<T> {
    count: number;
    next: string | null
    results: T[];
}

const axiosInstens = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1caffd86461d414dbc9844baacb831ff',
    }
});

class APIClient<T>{
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
       return axiosInstens.get<FetchResponce<T>>(this.endpoint,config).then(res => res.data)
    }

    gameDetails = (id: number | string) => {
        return axiosInstens.get<T>(this.endpoint + '/' + id).then(res => res.data)
    }
}

export default APIClient;