import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
  }
  interface FetchGamesResponce {
    count: number;
    results: Game[];
  }

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();

        apiClient
            .get<FetchGamesResponce>("/games", {signal: controller.signal})
            .then((response) => setGames(response.data.results))
            .catch((error) => {
                if(error instanceof CanceledError) return;
                setError(error.message)});
        return () => controller.abort();
        
    },[]);

    return {games,error}

}

export default useGames;