export const deleteTaskLogic = (tasks, taskId) => {
  return tasks.filter((task) => task.key !== taskId);
};
