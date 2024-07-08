import React from "react";
import Header from "../Header";
import { Link, useParams, useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="w-full">
      <Header />
      <div className="pt-16 ml-6">
          <iframe
            width="800"
            height="400"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;
