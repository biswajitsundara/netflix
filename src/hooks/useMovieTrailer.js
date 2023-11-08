import { useDispatch, useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const trailerVideo = useSelector(store => store.movies.trailerVideo);

    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      console.log(movieId);
      console.log(json);
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredData.length ? filteredData[0] : json.results[0];
      //console.log(trailer.key);
      dispatch(addTrailerVideo(trailer))
    };
  
    useEffect(() => {
      (!trailerVideo) && getMovieVideos();
    }, []);
    
}
 
export default useMovieTrailer;