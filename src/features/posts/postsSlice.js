import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async() => {
        const response = await fetch('https://www.reddit.com/.json');
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
    }
})

export default postsSlice.reducer;
export const selectPosts = state => state.posts.data.children;
export const isLoadingPosts = state => state.posts.isLoadingPosts;
export const postsError = state => state.posts.hasError;

