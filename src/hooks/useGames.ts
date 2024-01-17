import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { PlatForm } from "./usePlatForms";
import apiClient, { FetchResponce } from "../services/apiClient";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: PlatForm }[],
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