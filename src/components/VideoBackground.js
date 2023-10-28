import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/976573/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    //console.log(trailer.key);
    dispatch(addTrailerVideo(trailer))
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};

export default VideoBackground;
