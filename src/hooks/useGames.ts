import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ms from 'ms'
import { PlatForm } from "./usePlatForms";
import APIClient, { FetchResponce } from "../services/apiClient";
import useGameQueryStore from "../GameQueryStore";

export interface Game {
    id: number;
    name: string;
    slug: string;
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: PlatForm }[],
    metacritic: number,
    rating_top: number
  }

  const apiClient = new APIClient<Game>('/games');

  const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery);
    
    return useInfiniteQuery<FetchResponce<Game>, Error>({
      queryKey: ['games', gameQuery],
      queryFn: ({ pageParam }) => apiClient.getAll( { params: { 
        genres: gameQuery.genreId, 
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }}),
      staleTime: ms('1d'),
      getNextPageParam: (lastPage, allPage) => {
        return lastPage.next ? allPage.length + 1 : undefined
      }     
    })
  }

export default useGames;