import React from "react";
import styles from "./TaskFormFields.module.css";
import { TaskFormFieldsProps } from "./types";

const TaskFormFields: React.FC<TaskFormFieldsProps> = ({
  taskData,
  setTaskData,
}) => {
  return (
    <>
      <input
        className={styles.inputField}
        type="text"
        value={taskData.title}
        onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        placeholder="Заголовок"
      />
      <textarea
        className={styles.textareaField}
        value={taskData.description}
        onChange={(e) =>
          setTaskData({ ...taskData, description: e.target.value })
        }
        placeholder="Описание"
      />
      <label htmlFor="startDate" className={styles.label}>
        Дата начала задачи:
      </label>
      <input
        className={styles.inputField}
        type="date"
        id="startDate"
        value={taskData.startDate}
        onChange={(e) =>
          setTaskData({ ...taskData, startDate: e.target.value })
        }
      />
      <label htmlFor="endDate" className={styles.label}>
        Дата окончания задачи:
      </label>
      <input
        className={styles.inputField}
        type="date"
        id="endDate"
        value={taskData.endDate}
        onChange={(e) => setTaskData({ ...taskData, endDate: e.target.value })}
      />
    </>
  );
};

export default TaskFormFields;
