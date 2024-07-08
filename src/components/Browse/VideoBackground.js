import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const tailerVideo = useSelector((state) => state?.nowPlaying?.tailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="">
      <ReactPlayer
        className="w-screen aspect-video"
        url={`https://www.youtube.com/watch?v=${tailerVideo?.key}`}
        playing={true}
        controls={true}
        muted={true}
        width="100%"
        height="100%"
        config={{
          youtube: {
            playerVars: { autoplay: 1, mute: 1 },
          },
        }}
      />
    </div>
  );
};

export default VideoBackground;
