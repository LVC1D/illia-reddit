import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loadProfile = createAsyncThunk(
    'profile/loadProfile',
    async (author, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com/user/${author}/.json`);
        const json = response.json();
        return json;
    }
)

const initialState = {
    userProfile: {
        data: {
            children: []
        }
    },
    isLoadingProfile: false,
    hasError: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadProfile.pending, (state) => {
                state.isLoadingProfile = true;
                state.hasError = false;
            })
            .addCase(loadProfile.rejected, (state) => {
                state.isLoadingProfile = false;
                state.hasError = true;
            })
            .addCase(loadProfile.fulfilled, (state, action) => {
                state.isLoadingProfile = false;
                state.hasError = false;
                state.userProfile.data.children = action.payload.data.children;
            })
    }
});

export default profileSlice.reducer;
export const selectProfile = state => state.profile.userProfile.data.children;
export const isLoadingProfile = state => state.profile.isLoadingProfile;
export const profileError = state => state.profile.hasError;