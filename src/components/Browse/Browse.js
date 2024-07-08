import React from "react";
import Header from "../Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import GptSearch from "../Search/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const {gptSearch}=useSelector((state)=>state?.nowPlaying)
    useNowPlayingMovies();
    
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      {gptSearch?<GptSearch /> :null}
      <MainContainer/>
      <SecondryContainer/>
    </div>
  );
};

export default Browse;
