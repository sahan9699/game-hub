import React from "react";
import useTrailer from "../hooks/useTrailer";
import { AspectRatio } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return <video src={data?.results[0]?.data[480]} poster={data?.results[0]?.preview} controls />;
};

export default GameTrailer;
