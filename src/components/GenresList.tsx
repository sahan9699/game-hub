import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { cropImageUrl } from "../services/ImageUrl";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenra: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenra }: Props) => {
  const { data, isLoding, error } = useGenres();
  const genresSkeletans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return;
  return (
    <List>
      {isLoding &&
        genresSkeletans.map((i) => (
          <ListItem key={i}>
            <GenreSkeleton />
          </ListItem>
        ))}
      {data.map((genre: Genre) => (
        <ListItem my="5px" key={genre.id}>
          <HStack>
            <Image
              src={cropImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius="8px"
            />
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenra(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
