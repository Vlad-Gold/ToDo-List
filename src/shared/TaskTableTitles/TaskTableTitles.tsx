import styles from "./TaskTableTitles.module.css";
import { formatDate } from "../../shared/utils/formatDate";
import { Link } from "react-router-dom";
import { TaskTableTitlesProps } from "./types";

const TaskTableTitles = ({
  tasks,
  onToggleComplete,
  onDelete,
  onRestore,
  showActions = true,
  showCompletedColumn = true,
}: TaskTableTitlesProps) => (
  <table className={styles.taskTable}>
    <thead>
      <tr>
        <th>Заголовок</th>
        <th>Описание </th>
        <th>Дата начала</th>
        <th>Дата окончания</th>
        {showCompletedColumn && <th>Выполнена</th>}
        {showActions && <th>Действия</th>}
      </tr>
    </thead>
    <tbody>
      {tasks.map((task) => (
        <tr
          key={task.id}
          className={
            task.isCompleted ? styles.completedTask : styles.pendingTask
          }
        >
          <td>{task.title}</td>
          <td>{task.description}</td>
          <td>{formatDate(task.startDate)}</td>
          <td>{formatDate(task.endDate)}</td>
          {showCompletedColumn && (
            <td>
              {onToggleComplete ? (
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => onToggleComplete(task.id)}
                />
              ) : task.isCompleted ? (
                "Да"
              ) : (
                "Нет"
              )}
            </td>
          )}
          {showActions && (
            <td>
              {onDelete && (
                <button onClick={() => onDelete(task.id)}>Удалить</button>
              )}
              {onRestore && (
                <button onClick={() => onRestore(task.id)}>Восстановить</button>
              )}
              {!onRestore && onToggleComplete && (
                <Link to={`/task/edit/${task.id}`}>
                  <button>Редактировать</button>
                </Link>
              )}
            </td>
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default TaskTableTitles;
