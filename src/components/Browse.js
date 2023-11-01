import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchPage from "./SearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showSearchPage = useSelector((store) => store.search.showSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      {showSearchPage ? (
        <SearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/**
       * Main Container
       *    - Video Background
       *    - Video Title
       *
       * Secondary Container
       *    - Movie List * n
       *    - Cards * n
       */}
    </>
  );
};

export default Browse;
