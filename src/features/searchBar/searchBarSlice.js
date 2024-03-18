import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: "",
    reducers: {
        setSearchTerm: (state, action) => (state = action.payload),
        clearSearchTerm: (state) => (state = ""),
    },
})

export default searchSlice.reducer;
export const {setSearchTerm, clearSearchTerm} = searchSlice.actions;
export const selectSearchTerm = state => state.search;