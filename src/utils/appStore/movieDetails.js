import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

export const fetchMovieDetails = createAsyncThunk("fetchMovieDetails",async(id)=>{
    try {
        const movieDetails = await axiosInstance.get(`${id}/videos?language=en-US`);
        return movieDetails?.data?.results;
    } catch (error) {
        return error;
    }
});


const movieDetailsSlice = createSlice({
    name:"movieDetails",
    initialState:{
        loading:false,
        error:null,
        movieDetails:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchMovieDetails.pending, (state, action) => {
            state.loading = true;
          })
          builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.movieDetails = action.payload;
          })
          builder.addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
    }
});

// export const { addTrailer,addMovieInfo,toggleGptSearch } = nowPlayingSlice.actions;
export const movieDetailsReducer = movieDetailsSlice.reducer;

