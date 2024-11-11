import React from "react";
import styles from "./FilterTypeOptions.module.css";

interface FilterTypeOptionsProps {
  filterType: string;
  onFilterTypeChange: (type: string) => void;
}

const FilterTypeOptions: React.FC<FilterTypeOptionsProps> = ({ filterType, onFilterTypeChange }) => (
  <div>
    <div
      className={`${styles.dropdownOption} ${filterType === "title" ? styles.activeFilter : ""}`}
      onClick={() => onFilterTypeChange("title")}
    >
      По названию
    </div>
    <div
      className={`${styles.dropdownOption} ${filterType === "startDate" ? styles.activeFilter : ""}`}
      onClick={() => onFilterTypeChange("startDate")}
    >
      По дате начала
    </div>
    <div
      className={`${styles.dropdownOption} ${filterType === "endDate" ? styles.activeFilter : ""}`}
      onClick={() => onFilterTypeChange("endDate")}
    >
      По дате окончания
    </div>
    <div
      className={`${styles.dropdownOption} ${filterType === "status" ? styles.activeFilter : ""}`}
      onClick={() => onFilterTypeChange("status")}
    >
      По статусу выполнения
    </div>
  </div>
);

export default FilterTypeOptions;
