import { Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];
  const fetchGameCounts = data?.pages.reduce((total,page) => total + page.results.length, 0) || 0;

  if (error) {
    <Text>{error.message}</Text>;
  }
  return (
    <>
    <InfiniteScroll 
      dataLength={fetchGameCounts}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
      >
      <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 3, xl: 4 }}
          spacing={6}
          padding={5}
        >
          {isLoading &&
            skeletons.map((s) => (
              <GameCardContainer key={s}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          {data?.pages.map((page) => (
            <React.Fragment>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
    </InfiniteScroll> 
    </>
  );
};

export default GameGrid;
