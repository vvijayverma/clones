import React from "react";
import Header from "../Header";
import VideoContainer from "./VideoContainer";
import Sidebar from "./Sidebar";
import Body from "./Body";

const YouTube = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="pt-16 flex w-[100%]">
        <Sidebar />
        <VideoContainer />
      </div>
    </div>
  );
};

export default YouTube;
