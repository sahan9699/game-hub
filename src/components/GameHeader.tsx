import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface Props {
    gameQuery: GameQuery
}
const GameHeader = ({gameQuery}: Props) => {
    const header = `${gameQuery.genre?.name || ''} ${gameQuery.platform?.name || ''} Games`;
  return (
    <Heading as='h1' marginY={5}>{header}</Heading>
  )
}

export default GameHeader