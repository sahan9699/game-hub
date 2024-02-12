import { Heading } from "@chakra-ui/react";
import useSelectedPlatForm from "../hooks/useSelectedPlatform";
import useSelectedGenre from "../hooks/useSelectedGenre";
import useGameQueryStore from "../GameQueryStore";


const GameHeader = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const selectedGenre = useSelectedGenre(genreId);

  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const selectedPlatform = useSelectedPlatForm(platformId);
  
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
