import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../app/routes";

export default function ErrorPage() {
    const navigate = useNavigate();

    const goHome = () => navigate(ROUTES.home());
    
    return (
        <main className="preview-posts">
            <h3>404: Woopsie daisies...</h3>
            <p>Sorry, but this content was not found. Go home, and try again!</p>
            <img
                src="src/app/resources/you-broke-reddit.png.webp"
                alt=""
            />
            <div className="actions-container">
                <button className="button" onClick={goHome}>
                Go Home
                </button>
            </div>
        </main>
    )
}