import React from "react";
import styles from "./TitleFilter.module.css";

interface TitleFilterProps {
  filterValue: string;
  onFilterValueChange: (value: string) => void;
}

const TitleFilter: React.FC<TitleFilterProps> = ({ filterValue, onFilterValueChange }) => (
  <div className={styles.inputContainer}>
    <label>Введите название задачи</label>
    <input
      type="text"
      value={filterValue}
      onChange={(e) => onFilterValueChange(e.target.value)}
    />
  </div>
);

export default TitleFilter;
