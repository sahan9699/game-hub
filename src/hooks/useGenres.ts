import { useQuery } from "@tanstack/react-query";
import  {CACHE_KEY_GENRE}  from "../react-query/Constan";
import apiClient, { FetchResponce } from "../services/apiClient";
import genres from "../data/Genres";

export interface Genre {
    id: number,
    name: string
    image_background : string
}


const useGenres = () => useQuery({
    queryKey: CACHE_KEY_GENRE,
    queryFn: () =>  apiClient.get<FetchResponce<Genre>>('/genres')
            .then(res => res.data),
    staleTime: 1000*60*60*24,
    initialData: {count: genres.length, results: genres}
    
    
})

export default useGenres;