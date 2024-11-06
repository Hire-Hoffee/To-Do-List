import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTask } from "../types";

const initialState: {
  tasksList: TTask[];
} = {
  tasksList: [
    {
      id: 1,
      text: "Test Task",
      completed: false,
      deleted: false,
    },
    {
      id: 2,
      text: "Test Task 2",
      completed: false,
      deleted: false,
    },
    {
      id: 3,
      text: "Test Task 3",
      completed: false,
      deleted: false,
    },
  ],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask(state, action: PayloadAction<TTask>) {
      state.tasksList.push(action.payload);
    },
  },
});

export const { createTask } = tasksSlice.actions;

export default tasksSlice.reducer;
