import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../app/routes";
import { loadCurrentPost } from "../features/currentPost/currentPostSlice";
import { useDispatch } from "react-redux";
import {loadProfile} from "../features/profile/profileSlice"

export default function PreviewPost({post}) {
    const getTimeDifference = (timestamp) => {
        const currentTime = Math.floor(Date.now() / 1000);
        const timeDifferenceSeconds = currentTime - timestamp;
        if (timeDifferenceSeconds < 60) {
          return `${timeDifferenceSeconds} seconds ago`;
        } else if (timeDifferenceSeconds < 3600) {
          const minutes = Math.floor(timeDifferenceSeconds / 60);
          return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
          const hours = Math.floor(timeDifferenceSeconds / 3600);
          return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        }
    };
    
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
                  <Link to={ROUTES.profile(post.data.author)}>
                    Posted by {post.data.author}
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