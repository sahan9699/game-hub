import React, { useEffect, useState } from "react";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null
  selectedPlatform: Platform | null;
}
const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
  const { data, error, isLoding } = useGames(selectedGenre, selectedPlatform);

  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
        spacing={3}
        padding="10px"
      >
        {isLoding &&
          skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.length !== 0 &&
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
