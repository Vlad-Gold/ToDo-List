export interface TaskFormFieldsProps {
    taskData: {
      title: string;
      description: string;
      startDate: string;
      endDate: string;
      isCompleted: boolean;
    };
    setTaskData: React.Dispatch<React.SetStateAction<{
      title: string;
      description: string;
      startDate: string;
      endDate: string;
      isCompleted: boolean;
    }>>;
  }