import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ms from 'ms'
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
      genres: gameQuery.genreId, 
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.seachText,
      page: pageParam
    }}),
    staleTime: ms('1d'),
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined
    }     
  })

export default useGames;