import { useEffect, useState } from "react"
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

export interface Genre {
    id: number,
    name: string
}

interface FetchGenresResponce {
    count: number;
    results: Genre[];
  }

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoding, setIsLoding] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        setIsLoding(true);
        apiClient
            .get<FetchGenresResponce>("/genres", {signal: controller.signal})
            .then((response) => {
              setIsLoding(false)
              setGenres(response.data.results)})
            .catch((error) => {
                if(error instanceof CanceledError) return;
                setIsLoding(false)
                setError(error.message)});
        return () => controller.abort();
        
    },[]);

    return {genres,error,isLoding}
}

export default useGenres;