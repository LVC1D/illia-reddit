import React from "react";
import { useSelector } from "react-redux";
import {selectProfile, isLoadingProfile} from "./profileSlice";

export default function Profile() {
  const currentProfile = useSelector(selectProfile);
  const isLoadingAuthor = useSelector(isLoadingProfile)
  
  return (
    <div className="previwew-posts">
      {currentProfile.map(post => (
        <h1>Author is {post.data.link_author}</h1>
      ))}
    </div>
  )
}