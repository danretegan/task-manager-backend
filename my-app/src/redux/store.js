// store refactoring using Redux Toolkit & Slice:
import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/TasksSlice";
import { filtersReducer } from "./slices/FiltersSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
