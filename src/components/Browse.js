import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";



const Browse = () => {

  useNowPlayingMovies();
  return <>
  <Header />
  <MainContainer />
  <SecondaryContainer />
  {
    /**
     * Main Container
     *    - Video Background
     *    - Video Title
     * 
     * Secondary Container
     *    - Movie List * n
     *    - Cards * n
     */
  }
  <h1>Browse</h1>
  </>;
};

export default Browse;
