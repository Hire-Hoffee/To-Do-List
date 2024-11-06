import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTask } from "../types";

const initialState: {
  tasksList: TTask[];
} = {
  tasksList: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask(state, action: PayloadAction<TTask>) {
      state.tasksList = [action.payload, ...state.tasksList];
    },
    clearAllTasks(state) {
      state.tasksList = [];
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasksList = state.tasksList.filter((task) => task.id !== action.payload);
    },
  },
});

export const { createTask, clearAllTasks, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
