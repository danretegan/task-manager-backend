import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks } from "../operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder

      // fetchTask:
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      // addTask:
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.rejected, handleRejected)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      // deleteTask:
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })

      // toggleCompleted:
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.rejected, handleRejected)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload
        );
        state.items.splice(index, 1, action.payload);
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
