import React from "react";
import { getTimeDifference } from "../../app/helper";

export default function Comments({comment}) {
    return (
        <div key={comment.data.id}>
            <section className="comments">
                <p>{comment.data.body}</p>
                <div className="preview-posts-each">
                    <p>by {comment.data.author}</p>
                    <p>{getTimeDifference(comment.data.created_utc)}</p>
                    <p>{comment.data.ups} upvotes</p>
                    <p>&uarr;</p>
                    <p>&darr;</p>
                </div>
                <h3 className="replies">Replies:</h3>
                {comment.data.replies && 
                    <div className="replies">
                        <p>{comment.data.replies.data.children[0].data.body}</p>
                        <div className="preview-posts-each">
                            <p>by {comment.data.replies.data.children[0].data.author}</p>
                            <p>{getTimeDifference(comment.data.replies.data.children[0].data.created_utc)}</p>
                            <p>{comment.data.replies.data.children[0].data.ups} upvotes</p>
                            <p>&uarr;</p>
                            <p>&darr;</p>
                        </div>
                    </div>
                }
            </section>
        </div>
    )
}