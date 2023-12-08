import React, { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponce {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponce>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
    {error && <Text>{error}</Text>}
    <ul>
      {games.length !== 0 && games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
    </>
  );
};

export default GameGrid;
