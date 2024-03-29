import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts } from "./postsSlice";
import PreviewPost from "../../components/PreviewPost";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { selectSearchTerm } from "../searchBar/searchBarSlice";

export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const searchTerm = useSelector(selectSearchTerm);

    useEffect(() => {
        if (searchTerm.length === 0) {
            dispatch(fetchPosts())
        }
    }, [dispatch, searchTerm])

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