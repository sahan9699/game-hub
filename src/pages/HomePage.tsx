import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import GenresList from '../components/GenresList'
import GameHeader from '../components/GameHeader'
import PlatformSelector from '../components/PlatfromSelector'
import SortSelector from '../components/SortSelector'
import GameGrid from '../components/GameGrid'

const HomePage = () => {
  return (
    <>
        <Grid
      templateAreas={{
        base: ` "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" px="10px">
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={5}>
          <GameHeader />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector  />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
    </>
  )
}

export default HomePage