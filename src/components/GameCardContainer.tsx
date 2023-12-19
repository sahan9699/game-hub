import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}
const GameCardContainer = ({children}:Props) => {
  return (
    <Box width={{base:"480",sm:"300",md:"250",lg:"300px",xl:"260px"}} borderRadius={10} overflow={"hidden"}>
        {children}
    </Box>
  )
}

export default GameCardContainer