import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

const initialState = {
    post: [],
    isLoadingPost: false,
    hasError: false,
};

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
                state.post = [];
            })
            .addCase(loadCurrentPost.fulfilled, (state, action) => {
                state.isLoadingPost = false;
                state.hasError = false;
                state.post = action.payload;
            });
    },
});


export default currentPostSlice.reducer;
export const selectPost = (state) => state.currentPost.post;
export const isLoadingPost = (state) => state.currentPost.isLoadingPost;