import React, { useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/appStore/nowPlaying";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideo = async () => {
        try {
          const data = await axiosInstance.get(`${movieId}/videos?language=en-US`);
          const filterData = data?.data?.results?.filter(
            (trailer) => trailer.type === "Trailer"
          );
          const trailer = filterData.length
            ? filterData[0]
            : data?.data?.results[0];
            dispatch(addTrailer(trailer));
        } catch (error) {
          // console.log(error);
        }
      };
    
      useEffect(() => {
        getMovieVideo();
      }, [dispatch,movieId]);

  return (
    <div>
      
    </div>
  )
}

export default useMovieTrailer
