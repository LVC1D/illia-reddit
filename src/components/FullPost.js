import React from "react";
import { useSelector } from "react-redux";
import { selectPost, isLoadingPost, postError, selectComments } from "../features/currentPost/currentPostSlice";
import Comments from "../features/comments/Comments";
import { Navigate } from "react-router-dom";
import ROUTES from "../app/routes";
import LoadingState from "./LoadingState";
import useErrorBoundary from "./useErrorBoundary";
import { getTimeDifference } from "../app/helper";

export default function FullPost() {
    const currentPost = useSelector(selectPost)
    const isLoadingCurrent = useSelector(isLoadingPost);
    const postComments = useSelector(selectComments);

    const error = useErrorBoundary();

    if (isLoadingCurrent) {
      return <LoadingState />
    } 
    
    if (error || postError) {
      <div>
        <Navigate to={ROUTES.error()} />
      </div>
    }
    
    return (
      <div className="full-post" key={currentPost.data?.children[0]?.data?.id}>
          <h1>Here's what {currentPost.data?.children[0]?.data?.author} said {getTimeDifference(currentPost.data.children[0]?.data?.created_utc)}:</h1>
          <div>
            <h2>{currentPost.data?.children[0]?.data?.title}</h2>
            <div className="image-container">
              {currentPost.data?.children[0]?.data?.url_overridden_by_dest ? (
                  <img src={currentPost.data?.children[0]?.data?.url_overridden_by_dest} alt="" className="post-image" />
              ) : null}
            </div>
            <p>{currentPost.data?.children[0]?.data?.body}</p>
            <div style={{marginBottom: "25px"}} className="preview-rest">
              <p>{currentPost.data?.children[0]?.data?.ups} upvotes</p>
              <p>&uarr;</p>
              <p>&darr;</p>
              <p>{currentPost.data?.children[0]?.data?.num_comments} comments</p>
            </div>
          </div>
          <h2 style={{paddingBottom: "10px"}} className="comments">Comment section</h2>
          {postComments.data?.children.map(comment => (
            <Comments comment={comment} />
          ))}
      </div>
    );
}