import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        showSearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        toggleSearchView:(state, action) =>{
            state.showSearch = !state.showSearch;
        },
       addGPTMovieResults:(state, action) =>{
          const {movieNames, movieResults} = action.payload;
          state.movieNames = movieNames;
          state.movieResults = movieResults;
       }
    }
})

export const {toggleSearchView, addGPTMovieResults} = searchSlice.actions;
export default searchSlice.reducer;
