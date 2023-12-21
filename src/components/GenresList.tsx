import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { cropImageUrl } from "../services/ImageUrl";
import GenreSkeleton from "./GenreSkeleton";

const GenresList = () => {
  const { data, isLoding, error } = useGenres();
  const genresSkeletans = [1, 2, 3, 4, 5, 6,7,8,9,10,11,12];
  if (error) return;
  return (
    <List>
      {isLoding && genresSkeletans.map(() => <ListItem><GenreSkeleton /></ListItem>)}
      {data.map((genre: Genre) => (
        <ListItem my="5px" key={genre.id}>
          <HStack>
            <Image
              src={cropImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius="8px"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
