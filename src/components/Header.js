import React from "react";
// import { netflixIcon } from "../utils/exports";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/appStore/userSlice";
import { toggleGptSearch } from "../utils/appStore/nowPlaying";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state?.user);

  const Logout = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const GptSearch = () => {
    dispatch(toggleGptSearch());
  };

  return (
    // {/* <img className="w-24 sm:w-20" src={netflixIcon} alt="logo"></img> */}
    <>
      {userInfo && (
        <div className="absolute w-screen px-8 py-1 bg-gradient-to-b from-black z-10 flex justify-between items-center">
         <div className="text-white font-bold text-2xl flex gap-4">
         <NavLink to="/browse" className={({isActive})=>isActive?"Active":"inActive"}>Netflix</NavLink>
          <NavLink to="/youtube" className={({isActive})=>isActive?"Active":"inActive"}>Youtube</NavLink>
          </div>
          <div className="flex gap-4">
            <button
              className="py-2 px-4 text-white m-2 bg-gray-500 rounded"
              onClick={GptSearch}
            >
              Gpt Search
            </button>
            <div
              onClick={Logout}
              className="flex justify-end text-white items-center font-bold cursor-pointer"
            >
              <img src={userInfo?.photoURL} alt="user" className="w-10" />
              <p>Sign Out</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
