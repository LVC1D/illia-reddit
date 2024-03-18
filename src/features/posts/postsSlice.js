import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async() => {
        const response = await fetch('https://www.reddit.com/.json');
        const json = await response.json();
        return json;
    }
)

export const fetchFromSearch = createAsyncThunk(
    'posts/fetchFromSearch',
    async(term, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com/search.json?q=${term}`);
        const json = await response.json();
        return json;
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: {
            children: [],
        },
        isLoadingPosts: false,
        hasError: false,
        isSearching: false,
        hasSearchError: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoadingPosts = true
                state.hasError = false
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.isLoadingPosts = false
                state.hasError = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoadingPosts = false
                state.hasError = false
                state.data.children = action.payload.data.children;
            })
            .addCase(fetchFromSearch.pending, (state) => {
                state.isSearching = true
                state.hasSearchError = false
            })
            .addCase(fetchFromSearch.rejected, (state) => {
                state.isSearching = false
                state.hasSearchError = true
            })
            .addCase(fetchFromSearch.fulfilled, (state, action) => {
                state.isSearching = false
                state.hasSearchError = false
                state.data.children = action.payload.data.children;
            })
    }
})

export default postsSlice.reducer;
export const selectPosts = state => state.posts.data.children;
export const isLoadingPosts = state => state.posts.isLoadingPosts;
export const postsError = state => state.posts.hasError;

