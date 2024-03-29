import React from "react";
import SearchBar from "../features/searchBar/SearchBar";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();
    
    return (
        <>
            <nav className="nav-bar">
                <div classame="home-container">
                    <Link to='/'>
                        <img className="nav-bar-img" />
                    </Link>
                </div>
                <SearchBar />
            </nav>
        </>
    )
}