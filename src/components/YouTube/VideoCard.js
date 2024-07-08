import React from "react";

const VideoCard = ({
  title,
  channelTitle,
  thumbnails,
  viewCount,
  likeCount,
  commentCount,
}) => {
  return (
    <div className="shadow-md bg-white rounded-lg overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={thumbnails?.medium?.url}
        alt="thumbnails"
      />
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-sm text-gray-600 mb-2">{channelTitle}</p>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <span className="mr-2">{viewCount} views</span>
          <span className="mr-2">{likeCount} likes</span>
          <span>{commentCount} comments</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
