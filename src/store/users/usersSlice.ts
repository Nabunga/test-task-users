import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, sortByCity, sortByCompany } from "./asyncActions";
import { IUsers } from "./types";

interface usersState {
  users: Array<IUsers> | [];
  currentUser: IUsers | null;
  isLoading: boolean;
  isEditable: boolean;
}

const initialState: usersState = {
  users: [],
  currentUser: null,
  isLoading: false,
  isEditable: false
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload
    },
    setIsEditable: (state) => {
      state.isEditable = !state.isEditable
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false
      state.users = action.payload
    })
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(sortByCity.fulfilled, (state, action) => {
      state.isLoading = false
      state.users = action.payload
    })
    builder.addCase(sortByCity.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(sortByCompany.fulfilled, (state, action) => {
      state.isLoading = false
      state.users = action.payload
    })
    builder.addCase(sortByCompany.pending, (state) => {
      state.isLoading = true
    })
  }
})

export const {setCurrentUser, setIsEditable} = usersSlice.actions;
export default usersSlice.reducer;