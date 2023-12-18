import React, { useEffect, useState } from "react";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
const {games, error,isLoding} = useGames();
const skeletons = [1,2,3,4,5,6];
  return (
    <>
    {error && <Text>{error}</Text>}
    
    <SimpleGrid columns={{base:1,sm:2,md:3,lg:3,xl:5}} spacing={10} padding='10px'>
      {isLoding && skeletons.map((s) => <GameCardSkeleton key={s}/>)}
      {games.length !== 0 && games.map((game) => (
          <GameCard key={game.id} game={game}/>      
      ))}
    </SimpleGrid>
    </>
  );
};

export default GameGrid;
