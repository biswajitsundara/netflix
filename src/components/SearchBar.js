import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langConstrants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResults } from "../utils/searchSlice";


const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchInMovieDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearch = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const searchResults = await openai.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: gptQuery }],
    // });

    // if (!searchResults.choices) {
    //   //TODO - Display error
    // }

    // const gptMovies = searchResults.choices?.[0]?.message?.content.split(",");

    const gptMovies = ['Chupke Chupke', 'Amar Akbar Anthony', 'Angoor', 'Padosan' , 'Chhoti Si Baat', 'Raaz']

    const promiseArray = gptMovies.map(movie => searchInMovieDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGPTMovieResults({movieNames: gptMovies, movieResults: tmdbResults}));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].searchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-md"
          onClick={handleSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
