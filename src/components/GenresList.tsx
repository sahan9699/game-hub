import React from "react";
import useGames from "../hooks/useGames";
import useGenres, { Genre } from "../hooks/useGenres";

const GenresList = () => {
    const {genres,isLoding,error} = useGenres();
  return (
    <ul>
        {genres.map((genre:Genre) =>  <li key={genre.id}>{genre.name}</li>)}
    </ul>
  );
};

export default GenresList;
