import { useEffect, useMemo } from "react";
import { filterTasks } from "../shared/utils/filterTasks";
import { UseFilteredTasksProps } from "./types";

const useFilteredTasks = ({
  tasks,
  filterType,
  filterValue,
  tasksPerPage,
  currentPage,
  setCurrentPage,
}: UseFilteredTasksProps) => {
  const filteredTasks = useMemo(() => {
    return filterTasks(tasks, filterType, filterValue);
  }, [tasks, filterType, filterValue]);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  useEffect(() => {
    if (currentPage > Math.ceil(filteredTasks.length / tasksPerPage)) {
      setCurrentPage(1); 
    }
  }, [filteredTasks.length, currentPage, tasksPerPage]);

  return {
    filteredTasks,
    currentTasks,
  };
};

export default useFilteredTasks;
