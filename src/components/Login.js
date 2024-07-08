import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { toast } from "react-toastify";
import { trimInputValue } from "../utils/validate";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { addUser } from "../utils/appStore/userSlice";
import backGroundImg from "../Images/netflix-background.jpg";
import { Oval } from "react-loader-spinner";

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(true);

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const signUp = (data) => {
    setIsLoading(true);
    if (data?.fullName?.trim().length === 0) {
      setError("fullName", {
        type: "manual",
        message: "Username cannot be empty or contain only spaces",
      });
      return;
    } else {
      const trimData = trimInputValue(data);
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          trimData.email,
          trimData.password,
          trimData.fullName
        )
          .then((userCredential) => {
            updateProfile(auth.currentUser, {
              displayName: trimData.fullName,
              photoURL:
                "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
                setIsLoading(false);
                toast.success("sign up successfully");
                reset();
              })
              .catch((error) => {
                toast.error(error.message);
                setIsLoading(false);
              });
          })
          .catch((error) => {
            toast.error(error.message);
            setIsLoading(false);
          });
      } else {
        // sign In
        signInWithEmailAndPassword(auth, trimData.email, trimData.password)
          .then((userCredential) => {
            toast.success("sign in successfully");
            setIsLoading(true);
            reset();
          })
          .catch((error) => {
            toast.error(error.message);
            setIsLoading(false);
          });
      }
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* <Header /> */}
      <div className="absolute inset-0">
        <img
          src={backGroundImg}
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
      <form
        onSubmit={handleSubmit(signUp)}
        className="p-12 absolute bg-black w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-opacity-80 rounded-md"
      >
        <h1 className="font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-60"
              {...register("fullName", {
                required: "Name is required",
              })}
            />
            {errors.fullName && (
              <p className="text-red-500 font-bold">
                {errors.fullName.message}
              </p>
            )}
          </div>
        )}
        <input
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-60"
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 font-bold">{errors.email.message}</p>
        )}
        <div className="relative">
          <input
            type={show ? "password" : "text"}
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700 rounded-md bg-opacity-60"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain at least one uppercase, one lowercase, one number, and one special character",
              },
            })}
          />
          {show ? (
            <FaEyeSlash
              onClick={() => setShow(!show)}
              className="password-eye absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
            />
          ) : (
            <FaEye
              onClick={() => setShow(!show)}
              className="password-eye absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
            />
          )}
        </div>
        {errors.password && (
          <p className="text-red-500 font-bold">{errors.password.message}</p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="p-2 my-6 bg-red-700 font-bold w-full rounded-md cursor-pointer"
        >
          {isLoading ? (
            <div className="signIn-loader">
            <Oval
              visible={true}
              height="40"
              width="80"
              color="#4fa94d"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass="loader"
            />
            </div>
          ) : isSignInForm ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </button>

        <p className="p-2 my-6 font-bold">
          {isSignInForm ? (
            <span className="text-white">
              New to Netflix?{" "}
              <Link
                className="cursor-pointer text-blue-500"
                onClick={toggleSignForm}
              >
                Sign Up Now
              </Link>
            </span>
          ) : (
            <span className="text-white">
              Already registered?{" "}
              <Link
                className="cursor-pointer text-blue-500"
                onClick={toggleSignForm}
              >
                Sign In
              </Link>
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
