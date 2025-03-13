import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "@shared/schema";

interface TaskState {
  tasks: Task[];
  searchQuery: string;
}

const initialState: TaskState = {
  tasks: [],
  searchQuery: "",
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setTasks, addTask, updateTask, setSearchQuery } = taskSlice.actions;
export default taskSlice.reducer;
