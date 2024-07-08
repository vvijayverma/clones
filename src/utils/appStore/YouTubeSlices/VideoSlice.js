import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { header } from "../exports";
import { YouTube_VIDEOS_API } from "../../exports";

export const fetchYouTubeVideos = createAsyncThunk("fetchYouTubeVideos",async()=>{
    try {
        const youTubeVideos = await axios.get(YouTube_VIDEOS_API);
        return youTubeVideos?.data?.items;
    } catch (error) {
        return error;
    }
});


const youTubeVideosSlice = createSlice({
    name:"youTubeVideos",
    initialState:{
        loading:false,
        error:null,
        youTubeVideos:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchYouTubeVideos.pending, (state, action) => {
            state.loading = true;
          })
          builder.addCase(fetchYouTubeVideos.fulfilled, (state, action) => {
            state.loading = false;
            state.youTubeVideos = action.payload;
          })
          builder.addCase(fetchYouTubeVideos.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
    }
});

// export const { addTrailer,addMovieInfo,toggleGptSearch } = nowPlayingSlice.actions;
export const youTubeVideosReducer = youTubeVideosSlice.reducer;

