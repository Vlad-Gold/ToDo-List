import { Task } from "../../features/tasks/types";

export const filterTasks = (
  tasks: Task[],
  filterType: string,
  filterValue: string
): Task[] => {
  return tasks.filter((task) => {
    if (filterType === "title" && filterValue) {
      return task.title.toLowerCase().includes(filterValue.toLowerCase());
    }
    if (filterType === "startDate" && filterValue) {
      return (
        new Date(task.startDate).toLocaleDateString("ru-RU") ===
        new Date(filterValue).toLocaleDateString("ru-RU")
      );
    }
    if (filterType === "endDate" && filterValue) {
      return (
        new Date(task.endDate).toLocaleDateString("ru-RU") ===
        new Date(filterValue).toLocaleDateString("ru-RU")
      );
    }
    if (filterType === "status") {
      return filterValue === "completed" ? task.isCompleted : !task.isCompleted;
    }
    return true;
  });
};
