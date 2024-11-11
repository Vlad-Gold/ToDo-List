import { Task } from "../../features/tasks/types";

export interface TaskTableTitlesProps {
    tasks: Task[];
    onToggleComplete?: (id: string) => void;
    onDelete?: (id: string) => void;
    onRestore?: (id: string) => void;
    showActions?: boolean;
    showCompletedColumn?: boolean;
  }