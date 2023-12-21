import {
  Box,
  HStack,
  Image,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <Box my='6px' padding="5px" boxShadow="lg" bg="white">
      <HStack>
        <SkeletonCircle size="6" />
        <SkeletonText noOfLines={1} spacing="4" skeletonHeight="2" />
      </HStack>
    </Box>
  );
};

export default GenreSkeleton;
