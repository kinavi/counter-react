export const TaskConvertor = (
  tasks: any[],
): any[] => tasks.map((task) => ({ ...task, id: task._id }));
