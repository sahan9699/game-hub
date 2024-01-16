import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Genre } from "./useGenres";
import apiClient, { FetchResponce } from "../services/apiClient";

export interface Platform {
  id: number,
  name: string,
  slug: string
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[],
    metacritic: number,
    rating_top: number
  }


  const useGames = (gameQuery: GameQuery) => useQuery<FetchResponce<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.get<FetchResponce<Game>>('/games',{ params: { 
        genres: gameQuery.genre?.id, 
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.seachText
      }})
      .then(res => res.data)
  })

export default useGames;