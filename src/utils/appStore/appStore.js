import { configureStore } from "@reduxjs/toolkit";
import { persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

// Slices-----------------
import userReducer from "./userSlice";
import { nowPlayingReducer,popularReducer,topRatedReducer,upcomingReducer } from "./nowPlaying";
import { searchMovieReducer } from "./searchMovies";
import { movieDetailsReducer } from "./movieDetails";
// You tube slices
import { youTubeVideosReducer } from "./YouTubeSlices/VideoSlice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
  };

  const rootReducer = combineReducers({
    user: userReducer,
    nowPlaying: nowPlayingReducer,
    popular:popularReducer,
    topRated:topRatedReducer,
    upcoming:upcomingReducer,
    searchMovie:searchMovieReducer,
    movieDetails:movieDetailsReducer,

    youTubeVideos:youTubeVideosReducer
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const appStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
  });

  export const persistor = persistStore(appStore);
  export default appStore;
