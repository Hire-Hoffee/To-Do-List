import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTask } from "../types";

const initialState: {
  tasksList: TTask[];
  tab: "active" | "completed" | "deleted" | null;
} = {
  tasksList: [],
  tab: "active",
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
    setTaskStatus(
      state,
      action: PayloadAction<{ id: number; status: "active" | "completed" | "deleted" }>
    ) {
      state.tasksList = state.tasksList.map((task) => {
        if (task.id === action.payload.id) {
          task.status = action.payload.status;
        }
        return task;
      });
    },
    setTab(state, action: PayloadAction<"active" | "completed" | "deleted" | null>) {
      state.tab = action.payload;
    },
    setTasks(state, action: PayloadAction<TTask[]>) {
      state.tasksList = action.payload;
    },
  },
});

export const { createTask, clearAllTasks, setTab, setTaskStatus, setTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
