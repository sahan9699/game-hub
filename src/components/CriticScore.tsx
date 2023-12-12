import { Badge } from "@chakra-ui/react";

interface Props {
  critisScore: number;
}

const CriticScore = ({ critisScore }: Props) => {
  let color = critisScore > 75 ? "green" : critisScore > 60 ? "yellow" : "";

  return (
    <Badge
      ml="1"
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
      colorScheme={color}
    >
      {critisScore}
    </Badge>
  );
};

export default CriticScore;
