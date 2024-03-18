import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectProfile, isLoadingProfile} from "./profileSlice";
import { getTimeDifference } from "../../app/helper";
import { loadCurrentPost } from "../currentPost/currentPostSlice";

export default function Profile() {
  const currentProfile = useSelector(selectProfile);
  const isLoadingAuthor = useSelector(isLoadingProfile);
  const dispatch = useDispatch();

  if (isLoadingAuthor) {
    return <h1>Loading profile data...</h1>
  }

  // const showPost = () => {
  //   currentProfile.forEach(post => {
  //     const subPrefix = post.data.subreddit_name_prefixed;
  //     const postId = post.data.id;
  //     dispatch(loadCurrentPost({subPrefix, postId}))
  //   })
  // }
  
  return (
    <div className="preview-posts">
        <h1>Where {currentProfile[0].data.link_author ? currentProfile[0].data.link_author : "some random redditor"} was involved</h1>
        {currentProfile.map(post => (
          <button className="preview-els">
            <div>
                <h2>
                  {post.kind === 't1' ? post.data.link_title : post.data.tiile}
                </h2>
                {post.kind === 't1' ? <p>{post.data.body}</p> : <h2>{post.data.tiile}</h2>}
                <p>{getTimeDifference(post.data.created_utc)}</p>
            </div>
            <div className="preview-posts-each">
              <p>Posted by {post.data.author}</p>
              <p>{post.data.ups} likes</p>
              <p>&uarr;</p>
              <p>&darr;</p>
              <p>{[post.data.num_comments]} comments</p>
            </div>
          </button>
        ))}
    </div>
  )
}