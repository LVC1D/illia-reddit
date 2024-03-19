import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectProfile, isLoadingProfile, profileError} from "./profileSlice";
import { getTimeDifference } from "../../app/helper";
import { Navigate } from "react-router-dom";
import ROUTES from "../../app/routes";
import LoadingState from "../../components/LoadingState";
import useErrorBoundary from "../../components/useErrorBoundary";
import { loadCurrentPost } from "../currentPost/currentPostSlice";

export default function Profile() {
  const currentProfile = useSelector(selectProfile);
  const isLoadingAuthor = useSelector(isLoadingProfile);
  const error = useErrorBoundary();
  const dispatch = useDispatch();

  if (isLoadingAuthor) {
    return <LoadingState />;
  } 
  
  if (profileError || error) {
    <div>
      <Navigate to={ROUTES.error()} />
    </div>
  }

  const showPost = () => {
    currentProfile.forEach(post => {
      const subPrefix = post.data.subreddit_name_prefixed;
      const postId = post.data.id;
      dispatch(loadCurrentPost({subPrefix, postId}))
    })
  }
  
  const pStyle = {
    margin: "3rem auto",
    fontSize: "0.8rem",
    maxWidth: "75%",
    lineHeight: "1.2rem"
  }

  return (
    <div className="preview-posts">
        <h1>Where {currentProfile[0].data.link_author ? currentProfile[0].data.link_author : "some random redditor"} was involved</h1>
        {currentProfile.map(post => post.data.link_title && (
          <button className="preview-els" onClick={showPost}>
            <div className="preview-top">
                <h2 className="preview-h2">
                  {post.kind === 't1' ? post.data.link_title.substring(0, 40) + "..." : post.data.tiile}
                </h2>
                <p>{getTimeDifference(post.data.created_utc)}</p>
            </div>
            <p style={pStyle}>{post.data.body}</p>
            <div className="preview-posts-each">
              <div className="preview-author">
                <p>Posted by {post.data.author}</p>
              </div>
              <div className="preview-rest">
                <p>{post.data.ups} likes</p>
                <p>&uarr;</p>
                <p>&darr;</p>
                <p>{[post.data.num_comments]} comments</p>
              </div>
            </div>
          </button>
        ))}
    </div>
  )
}