import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "./../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { cropImageUrl } from "../services/ImageUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={cropImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore critisScore={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
