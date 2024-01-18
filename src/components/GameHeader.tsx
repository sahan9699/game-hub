import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatForms from '../hooks/usePlatForms'

interface Props {
    gameQuery: GameQuery
}

const GameHeader = ({gameQuery}: Props) => {
    const {data: genres} = useGenres();
    const {data: platforms} = usePlatForms();
    const selectedGenre = genres?.results.find((genre) => genre.id === gameQuery.genreId) 
    const selectedPlatforms = platforms?.results.find((platform) => platform.id === gameQuery.platformId)

    const header = `${selectedGenre?.id || ''} ${selectedPlatforms?.name || ''} Games`;
  return (
    <Heading as='h1' marginY={5}>{header}</Heading>
  )
}

export default GameHeader