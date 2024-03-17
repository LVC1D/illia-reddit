import React from "react";
import { useSelector } from "react-redux";
import { selectPost, isLoadingPost } from "../features/currentPost/currentPostSlice";

export default function FullPost() {
    const currentPost = useSelector(selectPost)
    const isLoadingCurrent = useSelector(isLoadingPost);

    if (isLoadingCurrent) {
        return <div>Loading</div>;
      } else if (!currentPost) {
        return null;
      }
    
    return <h1 className="preview-posts">{currentPost.subreddit_id}</h1>;
}