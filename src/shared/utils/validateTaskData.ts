export const validateTaskData = (taskData: { title: string; description: string; startDate: string; endDate: string }) => {
    if (!taskData.title || !taskData.description || !taskData.startDate || !taskData.endDate) {
      return { error: "Пожалуйста, заполните все поля!", isValid: false };
    }
  
    if (taskData.title.length > 50) {
      return { error: "Заголовок не может быть длиннее 50 символов.", isValid: false };
    }
  
    if (taskData.description.length > 200) {
      return { error: "Описание не может быть длиннее 200 символов.", isValid: false };
    }
  
    const startYear = taskData.startDate.split("-")[0];
    if (startYear.length !== 4) {
      return { error: "Год в дате начала должен быть в формате YYYY.", isValid: false };
    }
  
    return { error: "", isValid: true };
  };
  