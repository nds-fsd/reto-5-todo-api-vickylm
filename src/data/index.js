exports.tasks = [{
  id: 0,
  text: "Hacer la cama",
  fecha: new Date("2022-05-21"),
  done: false
},
{ 
  id: 1,
  text: "Ir al super",
  fecha: new Date("2022-05-14"),
  done: true
}];

function getAllTasks() {
  return tasks;
}

function addTask(title) {
  const newTask = {
    id: task.length + 1,
    title,
    completed: false,
  }
  tasks.push(newTask);
  return newTask;
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
  const index = task.findIndex(t => t.id === taskId);

  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1)[0];
    return deletedTask;
  }
  return null;
};

module.exports = {
  getAllTasks,
  addTask,
  toggleTaskCompletion,
  deleteTask,
};
