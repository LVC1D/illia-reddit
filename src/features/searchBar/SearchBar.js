import React from "react";
import { setSearchTerm, clearSearchTerm, selectSearchTerm } from "./searchBarSlice";
import { useSelector, useDispatch } from "react-redux";

export default function SearchBar() {
    const searchTerm = useSelector(selectSearchTerm)
    const dispatch = useDispatch();

    const handleSearch = e => dispatch(setSearchTerm(e.target.value));
    const clearSearch = () => dispatch(clearSearchTerm());
    return (
        <form>
            <input 
                type="text" 
                placeholder="Search posts..."
                value={searchTerm}
                onChange={handleSearch} />
            <button onClick={clearSearch} type="button">
                X
            </button>
        </form>
    )
}