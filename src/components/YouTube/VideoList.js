import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoList = ({ info }) => {
  return (
    <div className="px-6">
      <div className="grid grid-cols-4 gap-6">
        {info?.map((item) => (
          <Link to={`/watch?v=${item?.id}`}>
            <VideoCard
              key={item?.id}
              title={item?.snippet?.title}
              channelTitle={item?.snippet?.channelTitle}
              thumbnails={item?.snippet?.thumbnails}
              viewCount={item?.statistics?.viewCount}
              likeCount={item?.statistics?.likeCount}
              commentCount={item?.statistics?.commentCount}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
