import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { PlatForm } from "./usePlatForms";
import APIClient, { FetchResponce } from "../services/apiClient";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: PlatForm }[],
    metacritic: number,
    rating_top: number
  }

  const apiClient = new APIClient<Game>('/games');

  const useGames = (gameQuery: GameQuery) => useQuery<FetchResponce<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => apiClient.getAll( { params: { 
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.seachText
    }})     
  })

export default useGames;