import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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

  const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponce<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) => apiClient.getAll( { params: { 
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.seachText,
      page: pageParam
    }}),
    staleTime: 1000*60*60*24,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined
    }     
  })

export default useGames;