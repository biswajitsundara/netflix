import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () => {
  const search = useSelector((store) => store.search);
  const { movieResults, movieNames } = search;


  console.log(movieNames);

  if (!movieNames) return null;

  return (
    <div className="flex justify-center">
      <div className="p-4 m-4 bg-black text-white z-50 bg-opacity-60 rounded-md w-3/4">
        {movieNames.map((movieName, index) => (
            <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
        
      </div>
    </div>
  );
};

export default MovieSuggestions;
