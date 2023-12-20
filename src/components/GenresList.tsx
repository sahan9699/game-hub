import useGenres, { Genre } from "../hooks/useGenres";

const GenresList = () => {
    const {data,isLoding,error} = useGenres();
  return (
    <ul>
        {data.map((genre:Genre) =>  <li key={genre.id}>{genre.name}</li>)}
    </ul>
  );
};

export default GenresList;
