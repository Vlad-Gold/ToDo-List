// @ts-nocheck
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../../features/tasks/tasksSlice";
import { useParams, useNavigate, Link } from "react-router-dom";
import { RootState } from "../../store";
import SyncStatus from "../../components/SyncStatus/SyncStatus";
import TaskFormFields from "../../components/TaskFormFields/TaskFormFields";
import styles from "./TaskFormPage.module.css";
import { validateTaskData } from "../../shared/utils/validateTaskData"; 

const TaskFormPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const existingTask = useSelector((state: RootState) =>
    state.tasks.tasks.find((task) => task.id === id)
  );

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    startDate: existingTask?.startDate || "",
    endDate: existingTask?.endDate || "",
    isCompleted: false,
  });
  const [error, setError] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  useEffect(() => {
    if (existingTask) {
      setTaskData({
        title: existingTask.title,
        description: existingTask.description,
        startDate: existingTask.startDate,
        endDate: existingTask.endDate,
        isCompleted: existingTask.isCompleted,
      });
    }
  }, [existingTask]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { error, isValid } = validateTaskData(taskData);

    if (!isValid) {
      setError(error);
      setIsFormValid(false);
      return;
    }

    setError("");
    setIsFormValid(true);

    if (id) {
      dispatch(updateTask({ ...taskData, id }));
    } else {
      dispatch(addTask({ ...taskData, id: Date.now().toString() }));
    }
    navigate("/");
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <h1>{id ? "Редактировать задачу" : "Добавить задачу"}</h1>
        <form onSubmit={handleSubmit}>
          <TaskFormFields taskData={taskData} setTaskData={setTaskData} />

          {!isFormValid && <div className={styles.errorMessage}>{error}</div>}

          <button className={styles.button} type="submit">
            {id ? "Сохранить изменения" : "Добавить задачу"}
          </button>
          <Link to="/">
            <button className={styles.button} type="button">
              Назад на главную
            </button>
          </Link>
        </form>
      </div>
      <SyncStatus />
    </div>
  );
};

export default TaskFormPage;
