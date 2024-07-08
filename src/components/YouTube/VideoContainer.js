import React,{useEffect} from 'react';
import ButtonList from './ButtonList';
import { useDispatch,useSelector } from 'react-redux';
import { fetchYouTubeVideos } from '../../utils/appStore/YouTubeSlices/VideoSlice';
// import VideoCard from './VideoCard';
import VideoList from './VideoList';

const VideoContainer = () => {
  const dispatch = useDispatch();
  const youTubeVideos = useSelector((state)=>state?.youTubeVideos?.youTubeVideos);
  // console.log("=====",youTubeVideos);

  useEffect(()=>{
  dispatch(fetchYouTubeVideos())
  },[])


  return (
    <div className='w-[80%]'>
      <ButtonList/>
      <VideoList info={youTubeVideos}/>
    </div>
  )
}

export default VideoContainer;
