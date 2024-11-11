import { Task } from "../features/tasks/types";

export interface UseFilteredTasksProps {
    tasks: Task[];
    filterType: string;
    filterValue: string;
    tasksPerPage: number;
    currentPage: number;
    setCurrentPage: Function;
  }