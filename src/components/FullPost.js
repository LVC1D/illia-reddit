import React from "react";
import { useSelector } from "react-redux";
import { selectPost, isLoadingPost, postError } from "../features/currentPost/currentPostSlice";
import Comments from "../features/comments/Comments";
import { Navigate } from "react-router-dom";
import ROUTES from "../app/routes";
import LoadingState from "./LoadingState";

export default function FullPost() {
    const currentPost = useSelector(selectPost)
    const isLoadingCurrent = useSelector(isLoadingPost);

    const originalPost = currentPost[0];
    const postComments = currentPost[1].data.children;

    if (isLoadingCurrent) {
      return <LoadingState />
    } else if (!postComments) {
      <div>
        <Navigate to={ROUTES.error()} />
      </div>
    }
    
    return (
      <div className="full-post" key={originalPost.data.children[0].data.id}>
          <h1>Here's what {originalPost.data.children[0].data.author} is saying:</h1>
          <div>
            <h2>{originalPost.data.children[0].data.title}</h2>
            <p>{originalPost.data.children[0].data.body}</p>
          </div>
          {postComments.map(comment => (
            <Comments comment={comment} />
          ))}
      </div>
    );
}