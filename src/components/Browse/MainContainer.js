import React, { useEffect } from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector, useDispatch } from 'react-redux';
import { addMovieInfo } from '../../utils/appStore/nowPlaying';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { loading, error, nowPlaying } = useSelector((state) => state?.nowPlaying);

  useEffect(() => {
    if (nowPlaying && nowPlaying.length > 0) {
      const mainMovie = nowPlaying[0];
      const { title, overview, id } = mainMovie;
      dispatch(addMovieInfo({title, overview, movieId:id}));
    }
  }, [nowPlaying, dispatch]);

  if (!nowPlaying) return null;

  const mainMovie = nowPlaying[0];
  const { title, overview, id } = mainMovie;

  return (
    <div className="w-full">
      <VideoTitle title={title} overview={overview} movieId={id}/>
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
