import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import currentPostReducer from "../features/currentPost/currentPostSlice";
import profileReducer from "../features/profile/profileSlice.js";
import searchReducer from "../features/searchBar/searchBarSlice.js";

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        currentPost: currentPostReducer,
        profile: profileReducer,
        search: searchReducer
    }
})