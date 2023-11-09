import { BG_IMAGE_URL } from "../utils/constants";
import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover w-screen" src={BG_IMAGE_URL} alt="bg" />
      </div>
      <div>
        <SearchBar />
        <MovieSuggestions />
      </div>
    </>
  );
};

export default SearchPage;
