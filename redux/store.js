import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
const store = configureStore({
  reducer: {
    userData: userReducer,
  },
});
export default store;
