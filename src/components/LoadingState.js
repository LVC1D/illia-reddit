import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../features/posts/postsSlice";

export default function LoadingState() {
    const posts = useSelector(selectPosts)
    
    return (
        <div className="loading-posts">
            {posts.map(post => (
                <div className="loading-els">
                    <div>
                        <h2>Loading stuff...</h2>
                    </div>
                    <img className="loading-image" />
                    <div className="loading-each">
                        <p></p>
                        <p> likes</p>
                        <p>&uarr;</p>
                        <p>&darr;</p>
                        <p> comments</p>
                    </div>
                </div> 
            ))}
        </div>
    )
}