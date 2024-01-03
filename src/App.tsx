import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatfromSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeader from "./components/GameHeader";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null
  sortOrder: string | null
  seachText: string | null
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(seachText) => setGameQuery({...gameQuery, seachText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" px="10px">
          <GenresList onSelectGenra={(genre) => setGameQuery({...gameQuery, genre: genre})} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeader gameQuery={gameQuery}/>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector selectedParentPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform: platform})}/>
            <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sort) => setGameQuery({...gameQuery, sortOrder: sort})}/>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
