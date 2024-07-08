import React,{useEffect,lazy,Suspense} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser,addUser } from "../utils/appStore/userSlice";
import Protected from "./Protected";
import PublicRoute from "./PublicRoute";
import Header from "./Header";

const Login = lazy(() => import("./Login"));
const Browse = lazy(() => import("./Browse/Browse"));
const YouTube = lazy(() => import("./YouTube/YouTube"));
const WatchPage = lazy(()=> import("./YouTube/WatchPage"));
const MovieDetails = lazy(()=> import("./MovieDetails/MovieDetails"));

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        dispatch(removeUser);
      } else {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoute>
          <Suspense>
            <Login />
          </Suspense>
        </PublicRoute>
      ),
    },
    {
      path: "/browse",
      element: (
        <Protected>
          <Suspense fallback={<div>Loading...</div>}>
            <Browse />
          </Suspense>
        </Protected>
      ),
    },
    {
      path: "/movie",
      element: (
        <Protected>
          <Suspense fallback={<div>Loading...</div>}>
            <MovieDetails />
          </Suspense>
        </Protected>
      ),
    },
    {
      path: "/youtube",
      element: (
        <Protected>
          <Suspense fallback={<div>Loading...</div>}>
            <YouTube />
          </Suspense>
        </Protected>
      ),
    },
    {
      path: "/watch",
      element: (
        <Protected>
          <Suspense fallback={<div>Loading...</div>}>
            <WatchPage />
          </Suspense>
        </Protected>
      ),
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={appRouter} />
        </Suspense>
      </RouterProvider>
    </div>
  );
};

export default Body;
