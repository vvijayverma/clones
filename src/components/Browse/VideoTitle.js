import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const VideoTitle = ({title,overview}) => {
  const {movieInfo}=useSelector((state)=>state?.nowPlaying);
  // console.log('=============movieInfo=======================',movieInfo);

  if(!movieInfo)return;

  return (
    <div className='font-serif pt-40 px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
      <h1 className='text-6xl font-bold'>{movieInfo?.title}</h1>
      <p className='p-6 text-lg w-1/3'>{movieInfo?.overview}</p>
      <div className='flex gap-4 text-black'>
        <button className='px-4 py-2 text-xl rounded-lg bg-white hover:opacity-70'> Play</button>
        <Link to={`/movie?Id=${movieInfo?.movieId}`}><button className='px-4 py-2 text-xl rounded-lg bg-white hover:opacity-70'>More Info</button></Link>
      </div>
    </div>
  )
}

export default VideoTitle
