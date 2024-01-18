import useGenres from "./useGenres"

const useSelectedGenre = (selectedGenreId?: number) => {
    const {data: genres} = useGenres();
    return genres?.results.find((genre) => genre.id === selectedGenreId)
}

export default useSelectedGenre