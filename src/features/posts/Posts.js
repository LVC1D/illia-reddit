import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts, isLoadingPosts } from "./postsSlice";
import PreviewPost from "../../components/PreviewPost";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div className="preview-posts">
            {posts.map(post => (
                <Link to={ROUTES.post(post.data.id)}>
                    <PreviewPost post={post} />
                </Link>
            ))}
        </div>
    );
}