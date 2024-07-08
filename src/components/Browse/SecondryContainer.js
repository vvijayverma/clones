import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const { nowPlaying, loading, error } = useSelector(
    (state) => state?.nowPlaying
  );
  const { searchMovie } = useSelector((state) => state?.searchMovie);
  const { Popular } = useSelector((state) => state?.popular);
  const { topRated } = useSelector((state) => state?.topRated);
  const { upcoming } = useSelector((state) => state?.upcoming);
  if (!nowPlaying) return;
  if (!Popular) return;
  if (!topRated) return;
  if (!upcoming) return;
  // console.log(nowPlaying,'=====');
  return (
    nowPlaying && (
      <div className="bg-black w-screen">
        <div className="-mt-40 relative z-20">
          {searchMovie ? (
            <MovieList title={"Search Results"} movies={searchMovie} />
          ) : null}
          <MovieList title={"Now Playing"} movies={nowPlaying} />
          <MovieList title={"Popular"} movies={Popular} />
          <MovieList title={"Top Rated"} movies={topRated} />
          <MovieList title={"Upcoming"} movies={upcoming} />
        </div>
      </div>
    )
  );
};

export default SecondryContainer;
