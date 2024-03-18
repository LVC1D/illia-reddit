import React from "react";
import SearchBar from "../features/searchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);
    
    return (
        <>
            <nav className="nav-bar">
                <button onClick={handleBack} className="nav-bar-back">
                    Back
                </button>
                <Link to='/'>
                    <img className="nav-bar-img" />
                </Link>
                <SearchBar />
            </nav>
        </>
    )
}