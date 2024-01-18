import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useSelectedPlatForm from "../hooks/useSelectedPlatform";
import useSelectedGenre from "../hooks/useSelectedGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeader = ({ gameQuery }: Props) => {

  const selectedPlatform = useSelectedPlatForm(gameQuery.platformId);
  const selectedGenre = useSelectedGenre(gameQuery.genreId);

  const header = `${selectedGenre?.name || ""} ${
    selectedPlatform?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5}>
      {header}
    </Heading>
  );
};

export default GameHeader;
