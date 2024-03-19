import React from "react";
import { getTimeDifference } from "../../app/helper";

export default function Comments({comment}) {
    return (
        <div key={comment.data.id}>
            <section className="comments">
                <p>{comment.data.body}</p>
                <div className="preview-posts-each">
                    <p>by {comment.data.author}</p>
                    <div className="preview-rest">
                        <p>{getTimeDifference(comment.data.created_utc)}</p>
                        <p>{comment.data.ups} upvotes</p>
                        <p>&uarr;</p>
                        <p>&darr;</p>
                    </div>
                </div>
                {comment.data.replies && comment.data.replies.data.children[0].data.author &&
                    <div>
                        <h3 className="replies">Replies:</h3>
                        <div className="replies">
                            <p>{comment.data.replies.data.children[0].data.body}</p>
                            <div className="preview-posts-each">
                                <p>by {comment.data.replies.data.children[0].data.author}</p>
                                <div className="preview-rest">
                                    <p>{getTimeDifference(comment.data.replies.data.children[0].data.created_utc)}</p>
                                    <p>{comment.data.replies.data.children[0].data.ups} upvotes</p>
                                    <p>&uarr;</p>
                                    <p>&darr;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </section>
        </div>
    )
}