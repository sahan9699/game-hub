import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeader from "./components/GameHeader";
import GenresList from "./components/GenresList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatfromSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number
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
          <GenresList selectedGenreId={gameQuery.genreId} onSelectGenra={(genre) => setGameQuery({...gameQuery, genreId: genre.id})} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeader gameQuery={gameQuery}/>
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector   selectedParentPlatformId={gameQuery.platformId} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
            <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={(sort) => setGameQuery({...gameQuery, sortOrder: sort})}/>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
