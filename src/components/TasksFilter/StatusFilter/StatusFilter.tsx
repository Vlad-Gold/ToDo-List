import React from "react";
import styles from "./StatusFilter.module.css";

interface StatusFilterProps {
  filterValue: string;
  onFilterValueChange: (value: string) => void;
}

const StatusFilter: React.FC<StatusFilterProps> = ({ filterValue, onFilterValueChange }) => (
  <div className={styles.statusDropdown}>
    {["completed", "pending", "all"].map((status) => (
      <div
        key={status}
        className={`${styles.statusOption} ${filterValue === status ? styles.activeFilter : ""}`}
        onClick={() => onFilterValueChange(status)}
      >
        {status === "completed" ? "Выполненные" : status === "pending" ? "Не выполненные" : "Все задачи"}
      </div>
    ))}
  </div>
);

export default StatusFilter;
