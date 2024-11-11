import styles from "./TaskPagination.module.css";

interface PaginationProps {
  totalTasks: number;
  tasksPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const TaskPagination = ({ totalTasks, tasksPerPage, currentPage, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(totalTasks / tasksPerPage) || 1; 

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div>
      {totalTasks > 0 && currentPage === totalPages && (
        <div className={styles.endOfList}>Конец списка задач</div>
      )}

      <div className={styles.pagination}>
        <span
          className={`${styles.arrow} ${currentPage === 1 ? styles.disabled : ""}`}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          &lt;
        </span>
        {[...Array(totalPages)].map((_, index) => (
          <span
            key={index}
            className={`${styles.pageNumber} ${currentPage === index + 1 ? styles.activePage : ""}`}
            onClick={() => handlePageClick(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span
          className={`${styles.arrow} ${currentPage === totalPages ? styles.disabled : ""}`}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          &gt;
        </span>
      </div>
    </div>
  );
};

export default TaskPagination;
