import React from "react";
import { useForm } from "react-hook-form";
import openai from "../../utils/openai";
import { useDispatch,useSelector } from "react-redux";
import { fetchSearchMovie } from "../../utils/appStore/searchMovies";
import { toggleGptSearch } from "../../utils/appStore/nowPlaying";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const {searchMovie}=useSelector((state)=>state?.searchMovie)

  // console.log(searchMovie,"=======================");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const GptSearchQuery = async(query) => {
    try {
      dispatch(fetchSearchMovie(query))
      reset();
      dispatch(toggleGptSearch());
    } catch (error) {
      
    }
  };
  return (
    <div className="pt-[2%] flex justify-center relative z-10">
      <form className="w-1/2 flex justify-end" onSubmit={handleSubmit(GptSearchQuery)}>
        <div>
          <input
            type="text"
            className="px-4 py-2 m-2  rounded"
            placeholder="What would you like to watch"
            {...register("searchQuery", {
              required: "Please write what you want to watch",
            })}
          />
          {errors.searchQuery && (
            <p className="text-red-500 font-bold">
              {errors.searchQuery.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="py-2 px-6 m-2 bg-gray-500 text-white rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
