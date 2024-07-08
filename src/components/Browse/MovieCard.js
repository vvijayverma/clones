import React, { useState, useEffect } from 'react';
import { ImageUrl } from '../../utils/exports';
import useMovieTrailer from '../../hooks/useMovieTrailer';
import { useSelector,useDispatch } from 'react-redux';
import { addMovieInfo } from '../../utils/appStore/nowPlaying';

const MovieCard = ({ title, img, movieId,overview }) => {
  const dispatch = useDispatch();
  const { nowPlaying } = useSelector((state) => state?.nowPlaying);
  
  const [newmovieId, setMovieId] = useState(null);

  useEffect(() => {
    if (nowPlaying && nowPlaying.length > 0) {
      const mainMovie = nowPlaying[0];
      const { id } = mainMovie;
      setMovieId(id);
    }
  }, [nowPlaying]);

  useMovieTrailer(newmovieId);

  if (!nowPlaying) return null;
  if (!img) return null;

  const MovieTrailer = (movieId,title,overview) => {
    setMovieId(movieId);
    dispatch(addMovieInfo({movieId,title,overview}))
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='w-40 cursor-pointer'>
      <img src={`${ImageUrl}${img}`} alt='Movie Card' onClick={() => MovieTrailer(movieId,title,overview)} />
    </div>
  );
};

export default MovieCard;
