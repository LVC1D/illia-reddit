import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk function to load a specific post
export const loadCurrentPost = createAsyncThunk(
    'currentPost/loadCurrentPost',
    async ({subPrefix, postId}, thunkAPI) => {
        try {
            const response = await fetch(`https://www.reddit.com/${subPrefix}/comments/${postId}/.json`);
            const json = await response.json();
            return json;
        } catch (error) {
            throw Error('Failed to fetch post data');
        }
    }
);

// Define the initial state of the currentPost slice
const initialState = {
    post: null,
    isLoadingPost: false,
    hasError: false,
};

// Create the currentPost slice
export const currentPostSlice = createSlice({
    name: 'currentPost',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCurrentPost.pending, (state) => {
                state.isLoadingPost = true;
                state.hasError = false;
            })
            .addCase(loadCurrentPost.rejected, (state) => {
                state.isLoadingPost = false;
                state.hasError = true;
            })
            .addCase(loadCurrentPost.fulfilled, (state, action) => {
                state.isLoadingPost = false;
                state.hasError = false;
                const postData = action.payload?.[0]?.data?.children?.[0]?.data || null;
                state.post = postData;
            });
    },
});

// Export the reducer function
export default currentPostSlice.reducer;

// Selectors
export const selectPost = (state) => state.currentPost.post;
export const isLoadingPost = (state) => state.currentPost.isLoadingPost;