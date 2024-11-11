export interface Task {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  isCompleted: boolean;
}

export interface TasksState {
  tasks: Task[];
  deletedTasks: Task[];
  isSyncing: boolean;
  syncError: boolean;
}