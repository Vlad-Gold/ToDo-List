import React from "react";
import styles from "./StatusFilter.module.css";
import { StatusFilterProps } from "./types";

const StatusFilter: React.FC<StatusFilterProps> = ({ filterValue, onFilterValueChange }) => (
  <div className={styles.statusDropdown}>
    {["completed", "pending"].map((status) => (
      <div
        key={status}
        className={`${styles.statusOption} ${filterValue === status ? styles.activeFilter : ""}`}
        onClick={() => onFilterValueChange(status)}
      >
        {status === "completed" ? "Выполненные" : "Не выполненные"}
      </div>
    ))}
  </div>
);

export default StatusFilter;