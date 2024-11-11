import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../../features/tasks/tasksSlice";
import { RootState } from "../../store";
import TaskTableTitles from "../../shared/TaskTableTitles/TaskTableTitles";
import TaskPagination from "../../components/TaskPagination/TaskPagination";
import SyncStatus from "../../components/SyncStatus/SyncStatus";
import TasksFilter from "../../components/TasksFilter/TasksFilter/TaskFilter";
import useFilteredTasks from "../../hooks/useFilteredTasks";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 15; // показывает сколько задач отображатся

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const { filteredTasks, currentTasks } = useFilteredTasks({
    tasks,
    filterType,
    filterValue,
    tasksPerPage,
    currentPage,
    setCurrentPage,
  });

  const handleDelete = (id: string) => {
    if (window.confirm("Вы действительно хотите удалить задачу?")) {
      dispatch(deleteTask(id));
    }
  };

  const handleToggleComplete = (id: string) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      dispatch(updateTask({ id, isCompleted: !task.isCompleted }));
    }
  };

  const applyFilter = (filterType: string, filterValue: string) => {
    setFilterType(filterType);
    setFilterValue(filterValue);
  };

  return (
    <div>
      <div className={styles.title}>Список задач</div>
      {currentTasks.length > 0 ? (
        <TaskTableTitles
          tasks={currentTasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
        />
      ) : (
        <p className={styles.noTask}>Увы, нет задач для отображения :(</p>
      )}
      <TaskPagination
        totalTasks={filteredTasks.length}
        tasksPerPage={tasksPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <div className={styles.tasksHeader}>
        <Link to="/task/new">
          <button className={styles.createButton}>Создать задачу</button>
        </Link>
        <Link to="/deleted-tasks">
          <button className={styles.trashButton}>Корзина</button>
        </Link>
        <TasksFilter onFilter={applyFilter} />
      </div>
      <SyncStatus />
    </div>
  );
};

export default HomePage;
