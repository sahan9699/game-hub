import { useQuery } from "@tanstack/react-query";
import  {CACHE_KEY_GENRE}  from "../react-query/Constan";
import genres from "../data/Genres";
import APIClient from "../services/apiClient";


export interface Genre {
    id: number,
    name: string
    image_background : string
}

const apiClient = new APIClient<Genre>('/genres')


const useGenres = () => useQuery({
    queryKey: CACHE_KEY_GENRE,
    queryFn: apiClient.getAll,
    staleTime: 1000*60*60*24,
    initialData: {count: genres.length, results: genres}
    
    
})

export default useGenres;