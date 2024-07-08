import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";
import axios from "axios";
import { header } from "../exports";

export const fetchSearchMovie = createAsyncThunk("fetchSearchMovie",async(query)=>{
    try {
        const searchMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query?.searchQuery}&include_adult=true&page=1`,{headers: header});
        return searchMovie?.data?.results;
    } catch (error) {
        return error;
    }
});


const searchMovieSlice = createSlice({
    name:"searchMovie",
    initialState:{
        loading:false,
        error:null,
        searchMovie:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchSearchMovie.pending, (state, action) => {
            state.loading = true;
          })
          builder.addCase(fetchSearchMovie.fulfilled, (state, action) => {
            state.loading = false;
            state.searchMovie = action.payload;
          })
          builder.addCase(fetchSearchMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
    }
});

// export const { addTrailer,addMovieInfo,toggleGptSearch } = nowPlayingSlice.actions;
export const searchMovieReducer = searchMovieSlice.reducer;

