import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../features/posts/postsSlice";

export default function LoadingState() {
    const posts = useSelector(selectPosts)
    
    return (
        <div className="loading-posts">
            <h2 className="loading-h2">Loading stuff...</h2>
            {posts.map(post => (
                <div className="loading-els" key={post.data.id}>
                    <p>...</p>
                    <div className="loading-each">
                        <p>by... </p>
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