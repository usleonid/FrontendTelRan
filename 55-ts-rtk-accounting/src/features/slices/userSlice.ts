import { createSlice } from "@reduxjs/toolkit";
import { UserProfile } from "../../utils/types";

const userSlice = createSlice({
    name: 'user',
    initialState: {} as UserProfile,
    reducers: {
        putUser: (state, action) => action.payload,
        deleteUser: state => ({} as UserProfile)
    }
})

export const {putUser, deleteUser} = userSlice.actions
export default userSlice.reducer;