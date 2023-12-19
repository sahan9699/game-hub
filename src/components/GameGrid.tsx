import React, { useEffect, useState } from "react";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, isLoding } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
        spacing={10}
        padding="10px"
      >
        {isLoding &&
          skeletons.map((s) => (
            <GameCardContainer>
              <GameCardSkeleton key={s} />
            </GameCardContainer>
          ))}
        {games.length !== 0 &&
          games.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
