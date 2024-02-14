import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { SimpleGrid, Box, Image } from "@chakra-ui/react";

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if(error) throw error;

  if(isLoading) return null;
  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacingX="10px" spacingY="10px">
      {data?.results.map(i => <Box key={i.id}><Image src={i.image} alt='Dan Abramov' /></Box> ) }
    </SimpleGrid>
  );
};

export default GameScreenshots;
