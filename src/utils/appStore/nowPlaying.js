import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axiosInstance";

export const fetchNowPlaying = createAsyncThunk("nowPlaying",async()=>{
    try {
        const nowPlaying = await axiosInstance.get('now_playing?page=1');
        return nowPlaying?.data?.results;
    } catch (error) {
        return error;
    }
});

export const fetchPopular = createAsyncThunk("fetchPopular",async()=>{
    try {
        const Popular = await axiosInstance.get('popular?page=1');
        return Popular?.data?.results;
    } catch (error) {
        return error;
    }
});

export const fetchTopRated = createAsyncThunk("fetchTopRated",async()=>{
    try {
        const topRated = await axiosInstance.get('top_rated?page=1');
        return topRated?.data?.results;
    } catch (error) {
        return error;
    }
});

export const fetchUpcoming = createAsyncThunk("fetchUpcoming",async()=>{
    try {
        const upcoming = await axiosInstance.get('upcoming?page=1');
        return upcoming?.data?.results;
    } catch (error) {
        return error;
    }
});


const nowPlayingSlice = createSlice({
    name:"nowPlaying",
    initialState:{
        loading:false,
        error:null,
        nowPlaying:null,
        tailerVideo : null,
        movieInfo : null,
        gptSearch : false,
    },
    reducers: {
        addTrailer: (state, action) => {
            state.tailerVideo = action.payload;
        },
        addMovieInfo: (state, action) => {
            state.movieInfo = action.payload;
        },
        toggleGptSearch: (state, action) => {
            state.gptSearch = !state.gptSearch;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchNowPlaying.pending, (state, action) => {
            state.loading = true;
          })
          builder.addCase(fetchNowPlaying.fulfilled, (state, action) => {
            state.loading = false;
            state.nowPlaying = action.payload;
          })
          builder.addCase(fetchNowPlaying.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
    }
});

const popularSlice = createSlice({
    name:"popular",
    initialState:{
        loading:false,
        error:null,
        Popular:null,
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchPopular.pending, (state, action) => {
            state.loading = true;
          })
          builder.addCase(fetchPopular.fulfilled, (state, action) => {
            state.loading = false;
            state.Popular = action.payload;
          })
          builder.addCase(fetchPopular.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
    }
});

const topRatedSlice = createSlice({
    name:"topRated",
    initialState:{
        loading:false,
        error:null,
        topRated:null,
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchTopRated.pending, (state, action) => {
            state.loading = true;
          })
          builder.addCase(fetchTopRated.fulfilled, (state, action) => {
            state.loading = false;
            state.topRated = action.payload;
          })
          builder.addCase(fetchTopRated.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
    }
});

const upcomingSlice = createSlice({
    name:"upcoming",
    initialState:{
        loading:false,
        error:null,
        upcoming:null,
    },
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchUpcoming.pending, (state, action) => {
            state.loading = true;
          })
          builder.addCase(fetchUpcoming.fulfilled, (state, action) => {
            state.loading = false;
            state.upcoming = action.payload;
          })
          builder.addCase(fetchUpcoming.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
    }
});

export const { addTrailer,addMovieInfo,toggleGptSearch } = nowPlayingSlice.actions;
export const nowPlayingReducer = nowPlayingSlice.reducer;
export const popularReducer = popularSlice.reducer;
export const topRatedReducer = topRatedSlice.reducer;
export const upcomingReducer = upcomingSlice.reducer;
