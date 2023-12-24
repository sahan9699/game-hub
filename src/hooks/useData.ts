import { useEffect, useState } from "react"
import apiClient from "../services/apiClient";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponce<T> {
    count: number;
    results: T[];
  }
// T = Generic type paramitor
const useData = <T>(endpoint: string, requestConfig?:AxiosRequestConfig, deps?:[]) => {
  console.log(deps);
    const [data, setData] = useState<T[]>([]);
    const [isLoding, setIsLoding] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        setIsLoding(true);
        apiClient
            .get<FetchResponce<T>>(endpoint, {signal: controller.signal, ...requestConfig})
            .then((response) => {
              setIsLoding(false)
              setData(response.data.results)})
            .catch((error) => {
                if(error instanceof CanceledError) return;
                setIsLoding(false)
                setError(error.message)});
        return () => controller.abort();
        
    }, deps ? [...deps] : []);

    return {data,error,isLoding}
}

export default useData;