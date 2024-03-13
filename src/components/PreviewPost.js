import React from "react";

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
    
    return (
        <button>
            <div>
                <h2>{post.data.title}</h2>
                <p>{getTimeDifference(post.data.created_utc)}</p>
            </div>
            {post.data.thumbnail && <img src={post.data.thumbnail} />}
            <div>
                <p>Posted by {post.data.author}</p>
                <p>{post.data.ups} likes</p>
                <p>&uarr;</p>
                <p>&darr;</p>
                <p>{[post.data.num_comments]} comments</p>
            </div>
        </button>
    )
}