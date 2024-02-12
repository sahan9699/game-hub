import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { cropImageUrl } from "../services/ImageUrl";
import GenreSkeleton from "./GenreSkeleton";
import useGameQueryStore from "../GameQueryStore";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore(s => s.setGenreId);

  const genresSkeletans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        {" "}
        Genres
      </Heading>
      <List>
        {isLoading &&
          genresSkeletans.map((i) => (
            <ListItem key={i}>
              <GenreSkeleton />
            </ListItem>
          ))}
        {data?.results.map((genre) => (
          <ListItem my="8px" key={genre.id}>
            <HStack>
              <Image
                src={cropImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius="8px"
              />
              <Button
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                fontSize="lg"
                whiteSpace="normal"
                objectFit="contain"
                textAlign="left"
                variant="link"
                onClick={() => {
                  setGenreId(genre.id);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
