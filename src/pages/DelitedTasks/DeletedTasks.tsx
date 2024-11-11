import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearDeletedTasks,
  restoreTask,
} from "../../features/tasks/tasksSlice";
import { RootState } from "../../store";
import TaskPagination from "../../components/TaskPagination/TaskPagination";
import TaskTableTitles from "../../shared/TaskTableTitles/TaskTableTitles";
import SyncStatus from "../../components/SyncStatus/SyncStatus";
import { Link } from "react-router-dom";
import styles from "./DeletedTasks.module.css";

const DeletedTasksPage = () => {
  const dispatch = useDispatch();
  const deletedTasks = useSelector(
    (state: RootState) => state.tasks.deletedTasks
  );
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 10;

  const currentTasks = deletedTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);

  return (
    <div>
      <div className={styles.trash}>Корзина</div>
      {deletedTasks.length > 0 ? (
        <>
          <TaskTableTitles
            tasks={currentTasks}
            onRestore={(id) => dispatch(restoreTask(id))}
            showCompletedColumn={true}
            showActions={true}
          />
          <div className={styles.clearTrashButton}>
            <button onClick={() => dispatch(clearDeletedTasks())}>
              Очистить корзину
            </button>
          </div>
        </>
      ) : (
        <div className={styles.emptyTrash}>Корзина пуста</div>
      )}

      {deletedTasks.length > tasksPerPage && (
        <TaskPagination
          totalTasks={deletedTasks.length}
          tasksPerPage={tasksPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}

      <Link to="/">
        <button>Вернуться на домашнюю страницу</button>
      </Link>
      <SyncStatus />
    </div>
  );
};

export default DeletedTasksPage;
