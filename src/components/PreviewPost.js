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

    const pStyle = {
      margin: "3rem auto",
      fontSize: "0.8rem",
      maxWidth: "75%",
      lineHeight: "1.2rem"
    }

    return ( 
          <button className="preview-els" onClick={showPost}>
            <div className="preview-top">
                <h2 className="preview-h2">{post.data.title.length <= 40 ? post.data.title : post.data.title.substring(0,50) + "..."}</h2>
                <p>{getTimeDifference(post.data.created_utc)}</p>
            </div>
            <div className="image-container">
              {post.data.url_overridden_by_dest ? (
                  <img src={post.data.url_overridden_by_dest} alt="" className="post-image" />
              ) : <p style={pStyle}>{post.data.selftext}</p>}
            </div>
            <div className="preview-posts-each">
                <div onClick={showProfile} className="preview-author">
                  <Link to={ROUTES.profile(post.data.author)} className="profile-nick">
                    <p>Posted by {post.data.author}</p>
                  </Link>
                </div>
                <div className="preview-rest">
                  <p>{post.data.ups} likes</p>
                  <p>&uarr;</p>
                  <p>&darr;</p>
                  <p>{[post.data.num_comments]} comments</p>
                </div>
            </div>
          </button> 
    )
}