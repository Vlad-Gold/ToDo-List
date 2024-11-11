import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setTasks, setDeletedTasks, toggleSyncing, setSyncError } from './tasksSlice';
import { Task } from './types';

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  const deletedTasks = localStorage.getItem('deletedTasks');
  console.log('Загруженные задачи:', tasks); 
  return {
    tasks: tasks ? JSON.parse(tasks) : [],
    deletedTasks: deletedTasks ? JSON.parse(deletedTasks) : [],
  };
};

const saveTasksToLocalStorage = (tasks: Task[], deletedTasks: Task[]) => {
  console.log('Сохраняем задачи в LocalStorage:', tasks, deletedTasks); 
  localStorage.setItem('tasks', JSON.stringify(tasks));
  localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks));
};

export const useSyncTasks = () => {
  const dispatch = useDispatch();
  const { tasks, deletedTasks } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    const { tasks, deletedTasks } = loadTasksFromLocalStorage();
    dispatch(setTasks(tasks));
    dispatch(setDeletedTasks(deletedTasks));
  }, [dispatch]);

  // cинхронизация с LocalStorage 
  useEffect(() => {
    const syncWithLocalStorage = () => {
      dispatch(toggleSyncing());
      
      setTimeout(() => {
        const isSyncError = Math.random() < 0.5; // Имитация ошибки с вероятностью 50%
        if (isSyncError) {
          dispatch(setSyncError(true));
          alert('Ошибка синхронизации. Попробуйте еще раз.');
        } else {
          console.log('Обновление данных в LocalStorage');
          saveTasksToLocalStorage(tasks, deletedTasks);
          dispatch(setSyncError(false));
        }
        dispatch(toggleSyncing());
      }, 500);
    };

    const timer = setTimeout(syncWithLocalStorage, 300);
    return () => clearTimeout(timer);
  }, [tasks, deletedTasks, dispatch]);
};
