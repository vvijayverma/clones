import React, { useEffect, useCallback } from "react";
import { fetchNowPlaying, fetchPopular, fetchTopRated, fetchUpcoming } from "../utils/appStore/nowPlaying";
import { useDispatch, useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const { nowPlaying } = useSelector((state) => state?.nowPlaying);
  const { Popular } = useSelector((state) => state?.popular);
  const { topRated } = useSelector((state) => state?.topRated);
  const { upcoming } = useSelector((state) => state?.upcoming);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!nowPlaying) {
      dispatch(fetchNowPlaying());
    }
    if (!Popular) {
      dispatch(fetchPopular());
    }
    if (!topRated) {
      dispatch(fetchTopRated());
    }
    if (!upcoming) {
      dispatch(fetchUpcoming());
    }
  }, []); 


  // const fetchData = useCallback(() => {
  //   if (!nowPlaying) {
  //     dispatch(fetchNowPlaying());
  //   }
  //   dispatch(fetchPopular());
  //   dispatch(fetchTopRated());
  //   dispatch(fetchUpcoming());
  // }, [dispatch, nowPlaying]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);
};

export default useNowPlayingMovies;
