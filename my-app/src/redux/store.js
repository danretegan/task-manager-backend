// store refactoring using Redux Toolkit & Slice:
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/tasksSlice";
import { filtersReducer } from "./slices/filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
