import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatfromSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedParentPlatform, setSelectedParentPlatform] = useState<Platform | null>(null);
  

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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" px="10px">
          <GenresList onSelectGenra={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedParentPlatform={selectedParentPlatform} onSelectPlatform={(platform) => setSelectedParentPlatform(platform)}/>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedParentPlatform}/>
      </GridItem>
    </Grid>
  );
}

export default App;
