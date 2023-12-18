import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
   <Card width={{base:"480",sm:"300",md:"250",lg:"300",xl:"200"}} overflow={"hidden"} borderRadius={10}>
      <Skeleton  height="200px"  />
      <CardBody>
        <SkeletonText />
      </CardBody>
   </Card>
  )
}

export default GameCardSkeleton