import React from "react";
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from "./searchBarSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchFromSearch } from "../posts/postsSlice";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    
    const searchTerm = useSelector(selectSearchTerm)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleBack = () => navigate(-1);

    const searchResults = (e) => {
        e.preventDefault();
        dispatch(fetchFromSearch(searchTerm));
    };
    const handleSearch = e => dispatch(setSearchTerm(e.target.value));
    const clearSearch = () => dispatch(clearSearchTerm());

    const searchIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/search.svg';
    const clearIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/clear.svg';

    return (
        <form onSubmit={searchResults} id="form">
            <button onClick={handleBack} className="nav-bar-button">
            &larr; Back
            </button>
            <div id="search-container">
                <img id="search-icon" alt="" src={searchIconUrl} />
                <input
                    type="text" 
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input" />
                {searchTerm.length > 0 && (
                    <button
                    onClick={clearSearch}
                    type="button"
                    id="search-clear-button"
                    >
                    <img src={clearIconUrl} alt="" />
                    </button>
                )}
            </div>
            <button type="submit" className="nav-bar-button">
                Search
            </button>
        </form>
    )
}