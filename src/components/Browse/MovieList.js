import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
        <h1 className="py-2 text-3xl font-bold text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((item) => {
            return <MovieCard key={item.id} movieId={item.id} title={item.title} overview={item.overview} img={item.poster_path}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
