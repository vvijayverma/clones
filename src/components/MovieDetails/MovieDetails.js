import React, { useEffect } from "react";
import Header from "../Header";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { fetchMovieDetails } from "../../utils/appStore/movieDetails";

const MovieDetails = () => {
  const [movieId, setMovieId] = useSearchParams();
  const dispatch = useDispatch();
  useMovieTrailer(movieId.get("Id"));
  const tailerVideo = useSelector((state) => state?.nowPlaying?.tailerVideo);
  const movieDetails = useSelector(
    (state) => state?.movieDetails?.movieDetails
  );

  useEffect(() => {
    if (movieId.get("Id")) {
      dispatch(fetchMovieDetails(movieId.get("Id")));
    }
  }, [dispatch, movieId]);

  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <ReactPlayer
        className="w-screen aspect-video"
        url={`https://www.youtube.com/watch?v=${tailerVideo?.key}`}
        playing={true}
        controls={true}
        muted={false}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { autoplay: 1, mute: 1 },
          },
        }}
      />
      <div className="">
        <h1 className="font-bold text-3xl py-6">Related Videos</h1>
        <div className="grid grid-cols-4 gap-4 rounded-lg shadow-lg">
          {movieDetails &&
            movieDetails.map((movie) => (
              <div key={movie.id} className="rounded">
                <ReactPlayer
                  className="w-screen aspect-video"
                  url={`https://www.youtube.com/watch?v=${movie.key}`}
                  playing={false}
                  controls={true}
                  muted={false}
                  width="100%"
                  height="100%"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
