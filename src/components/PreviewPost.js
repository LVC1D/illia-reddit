import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../app/routes";
import { loadCurrentPost } from "../features/currentPost/currentPostSlice";
import { useDispatch } from "react-redux";
import {loadProfile} from "../features/profile/profileSlice"
import { getTimeDifference } from "../app/helper";

export default function PreviewPost({post}) {
    
    const dispatch = useDispatch();
    const showPost = () => {
      const subPrefix = post.data.subreddit_name_prefixed;
      const postId = post.data.id;
      dispatch(loadCurrentPost({subPrefix, postId}))
    }

    const showProfile = () => {
      const userProfile = post.data.author;
      dispatch(loadProfile(userProfile));
    }

    return ( 
          <button className="preview-els" onClick={showPost}>
            <div>
                <h2>{post.data.title}</h2>
                <p>{getTimeDifference(post.data.created_utc)}</p>
            </div>
            {post.data.thumbnail && <img src={post.data.thumbnail} />}
            <div className="preview-posts-each">
                <div onClick={showProfile}>
                  <Link to={ROUTES.profile(post.data.author)} className="profile-nick">
                    <p>Posted by {post.data.author}</p>
                  </Link>
                </div>
                <p>{post.data.ups} likes</p>
                <p>&uarr;</p>
                <p>&darr;</p>
                <p>{[post.data.num_comments]} comments</p>
            </div>
          </button> 
    )
}