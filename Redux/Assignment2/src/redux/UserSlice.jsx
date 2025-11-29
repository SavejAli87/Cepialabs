
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async() => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    if(!response.ok){
      throw new Error ("Failed to fetch users");
    }
    return response.json();
  }
);

const userSlice = createSlice({
  name: "users",
  initialState:{
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    //pending
    .addCase(fetchUsers.pending, (state) => {
      state.status = "succeeded";
      state.list = action.payload;
    })

    //Success
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.list = action.payload;
    })

    //Failure
    .addCase(fetchUsers.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });


  }
})

export default userSlice.reducer;