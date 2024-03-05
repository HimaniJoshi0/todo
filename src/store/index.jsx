import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slice/reduce"

export const store = configureStore({
    reducer: {
      list_data: userSlice.reducer,
    },
  });