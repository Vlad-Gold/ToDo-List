import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksState } from './types';

const initialState: TasksState = {
  tasks: [],
  deletedTasks: [],
  isSyncing: false,
  syncError: false,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
    setDeletedTasks(state, action: PayloadAction<Task[]>) {
      state.deletedTasks = action.payload;
    },
    deleteTask(state, action: PayloadAction<string>) {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        const [deletedTask] = state.tasks.splice(taskIndex, 1);
        state.deletedTasks.push(deletedTask);
      }
    },
    updateTask(state, action: PayloadAction<Partial<Task> & { id: string }>) {
      const updatedTask = action.payload;
      const existingTask = state.tasks.find(task => task.id === updatedTask.id);
      if (existingTask) {
        existingTask.title = updatedTask.title ?? existingTask.title;
        existingTask.description = updatedTask.description ?? existingTask.description;
        existingTask.startDate = updatedTask.startDate ?? existingTask.startDate;
        existingTask.endDate = updatedTask.endDate ?? existingTask.endDate;
        existingTask.isCompleted = updatedTask.isCompleted ?? existingTask.isCompleted;
      }
    },
    restoreTask(state, action: PayloadAction<string>) {
      const taskId = action.payload;
      const taskIndex = state.deletedTasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        const [restoredTask] = state.deletedTasks.splice(taskIndex, 1);
        state.tasks.push(restoredTask);
      }
    },
    toggleSyncing(state) {
      state.isSyncing = !state.isSyncing;
    },
    setSyncError(state, action: PayloadAction<boolean>) {
      state.syncError = action.payload;
    },
    clearDeletedTasks(state) {
      state.deletedTasks = [];
    },
  },
});

export const {
  addTask,
  setTasks,
  setDeletedTasks,
  deleteTask,
  updateTask,
  restoreTask,
  toggleSyncing,
  setSyncError,
  clearDeletedTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
