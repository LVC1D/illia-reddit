import React from "react";
import { useSelector } from "react-redux";
import { selectPost, isLoadingPost } from "../features/currentPost/currentPostSlice";
import Comments from "../features/comments/Comments";

export default function FullPost() {
    const currentPost = useSelector(selectPost)
    const isLoadingCurrent = useSelector(isLoadingPost);

    const originalPost = currentPost[0];
    const postComments = currentPost[1].data.children;

    if (isLoadingCurrent) {
      return <p className="preview-posts">Loading</p>;
    } else if (!currentPost) {
      return null;
    }
    
    return (
      <div className="preview-posts" key={originalPost.data.children[0].data.id}>
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