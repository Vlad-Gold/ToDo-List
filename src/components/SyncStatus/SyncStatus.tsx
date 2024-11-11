import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { toggleSyncing, setSyncError } from "../../features/tasks/tasksSlice";
import styles from "./SyncStatus.module.css";

const SyncStatus = () => {
  const dispatch = useDispatch();
  const isSyncing = useSelector((state: RootState) => state.tasks.isSyncing);
  const syncError = useSelector((state: RootState) => state.tasks.syncError);

  const handleRetrySync = () => {
    dispatch(toggleSyncing());
    dispatch(setSyncError(false));

    setTimeout(() => {
      const hasError = Math.random() < 0.5;
      if (hasError) {
        dispatch(setSyncError(true));
        alert("Ошибка синхронизации. Попробуйте еще раз.");
      } else {
        dispatch(setSyncError(false));
      }
      dispatch(toggleSyncing());
    }, 500);
  };

  let statusMessage = "Синхронизировано";
  if (isSyncing) {
    statusMessage = "Синхронизируется...";
  } else if (syncError) {
    statusMessage = "Ошибка синхронизации";
  }

  return (
    <div className={styles.syncStatus}>
        <div> Статус синхронизации с LocalStorage:</div>
      <p>{statusMessage}</p>
      {syncError && (
        <button onClick={handleRetrySync} className={styles.retryButton}>
          Повторить синхронизацию
        </button>
      )}
    </div>
  );
};

export default SyncStatus;
