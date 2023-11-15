
const tasks = require('../data');

function getAllTasks() {
  return tasks;
}

function addTask(title) {
  const newTask = {
    id: tasks.length + 1,
    title,
    completed: false,
  };

  tasks.push(newTask);
  return newTask;
}

function updateTask(taskId, updates) {
  const task = tasks.find(t => t.id === taskId);

  if (task) {
    Object.assign(task, updates);
    return task;
  }

  return null;
}

function getTaskById(taskId) {
  return tasks.find(t => t.id === taskId);
}

function toggleTaskCompletion(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (task) {
    task.completed = !task.completed;
    return task;
  }

  return null;
}

function deleteTask(taskId) {
  const index = tasks.findIndex(t => t.id === taskId);

  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1)[0];
    return deletedTask;
  }

  return null;
}

module.exports = {
  getAllTasks,
  addTask,
  updateTask,
  getTaskById,
  toggleTaskCompletion,
  deleteTask,
};

