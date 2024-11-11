import { useState, useEffect } from "react";
import styles from "./TasksFilter.module.css";
import FilterTypeOptions from "../FilterTypeOptions/FilterTypeOptions";
import TitleFilter from "../TitleFilte/TitleFilter";
import DateFilter from "../DateFilter/DateFilter";
import StatusFilter from "../StatusFilter/StatusFilter";

interface TasksFilterProps {
  onFilter: (filterType: string, filterValue: any) => void;
}

const TasksFilter = ({ onFilter }: TasksFilterProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleFilterButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClearFilter = () => {
    setFilterType("");
    setFilterValue("");
    onFilter("", ""); 
  };

  useEffect(() => {
    if (filterValue !== "") {
      onFilter(filterType, filterValue);
    }
  }, [filterValue, filterType, onFilter]);

  return (
    <div className={styles.filterContainer}>
      <button className={styles.filterButton} onClick={handleFilterButtonClick}>
        Фильтровать
      </button>

      {isMenuOpen && (
        <div className={styles.dropdownMenu}>
          <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>

          <FilterTypeOptions
            filterType={filterType}
            onFilterTypeChange={setFilterType}
          />

          {filterType === "title" && (
            <TitleFilter
              filterValue={filterValue}
              onFilterValueChange={setFilterValue}
            />
          )}

          {filterType === "startDate" && (
            <DateFilter
              label="Выберите дату начала"
              filterValue={filterValue}
              onFilterValueChange={setFilterValue}
            />
          )}

          {filterType === "endDate" && (
            <DateFilter
              label="Выберите дату окончания"
              filterValue={filterValue}
              onFilterValueChange={setFilterValue}
            />
          )}

          {filterType === "status" && (
            <StatusFilter
              filterValue={filterValue}
              onFilterValueChange={setFilterValue}
            />
          )}

          <button
            className={styles.clearFilterButton}
            onClick={handleClearFilter}
          >
            Сбросить фильтрацию
          </button>
        </div>
      )}
    </div>
  );
};

export default TasksFilter;