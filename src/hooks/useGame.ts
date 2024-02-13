import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponce } from "../services/apiClient";
import ms from "ms";
import { Game } from "../entities/Game";

  const apiClient = new APIClient<Game>(`/games`);

const useGame = (slug: string) => {

    return useQuery({
      queryKey: ['game', slug],
      queryFn: () => apiClient.gameDetails(slug),
      staleTime: ms('1d')    
    })
}

export default useGame;