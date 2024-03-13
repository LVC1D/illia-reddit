import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPosts, fetchPosts, isLoadingPosts } from "./postsSlice";
import PreviewPost from "../../components/PreviewPost";

export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div>
            <h1>This is gonna be Reddit!</h1>
            {posts.map(post => (
                <PreviewPost post={post} />
            ))}
        </div>
    );
}