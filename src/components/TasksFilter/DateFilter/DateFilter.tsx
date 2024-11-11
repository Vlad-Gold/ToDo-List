import React from "react";
import styles from "./DateFilter.module.css";

interface DateFilterProps {
  label: string;
  filterValue: string;
  onFilterValueChange: (value: string) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ label, filterValue, onFilterValueChange }) => (
  <div className={styles.rangeInputContainer}>
    <label>{label}</label>
    <input
      type="date"
      value={filterValue}
      onChange={(e) => onFilterValueChange(e.target.value)}
    />
  </div>
);

export default DateFilter;
