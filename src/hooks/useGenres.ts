import { useQuery } from "@tanstack/react-query";
import  {CACHE_KEY_GENRE}  from "../react-query/Constan";
import genres from "../data/Genres";
import APIClient from "../services/apiClient";
import ms from "ms";
import { Genre } from "../entities/Genre";


const apiClient = new APIClient<Genre>('/genres')


const useGenres = () => useQuery({
    queryKey: CACHE_KEY_GENRE,
    queryFn: apiClient.getAll,
    staleTime: ms('1d'),
    initialData: genres  
})

export default useGenres;