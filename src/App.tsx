import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"; 
import TaskFormPage from "./pages/TaskFormPage/TaskFormPage";
import DeletedTasksPage from "./pages/DelitedTasks/DeletedTasks";
import { useSyncTasks } from "./features/tasks/syncTasks";

const App = () => {
  useSyncTasks();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task/new" element={<TaskFormPage />} />
        <Route path="/task/edit/:id" element={<TaskFormPage />} />
        <Route path="/deleted-tasks" element={<DeletedTasksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
