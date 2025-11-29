import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./UserSlice";

const Store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default Store;
