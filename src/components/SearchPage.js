import { BG_IMAGE_URL } from "../utils/constants";
import MovieSuggestions from "./MovieSuggestions";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          src={BG_IMAGE_URL}
          alt="bg"
        />
      </div>
      <SearchBar />
      <MovieSuggestions />
    </>
  );
};

export default SearchPage;
