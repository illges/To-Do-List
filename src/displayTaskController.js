import {todo_item, tasks} from './taskController';

const displayTaskList = () => {
  const div = document.getElementById('task-list');
  const task = document.createElement('div');
  task.classList.add('task-item');
  const head = document.createElement('div');
  const description = document.createElement('div');
  const priority = document.createElement('div');

  head.innerHTML = tasks[tasks.length -1].title + ' - ' + tasks[tasks.length -1].dueDate;
  description.innerHTML = tasks[tasks.length -1].description;
  priority.innerHTML = tasks[tasks.length -1].priority + ' priority';
  
  task.appendChild(head);
  task.appendChild(description);
  task.appendChild(priority);
  div.appendChild(task);
}

const displayTaskForm = () => {
  const form = document.querySelector('.new-task');
  const newTask = document.querySelector('.task-btn');
  
  if (form.style.display === "") {
    form.style.display = "grid";
    newTask.innerHTML = "Cancel";
  } else if (form.style.display === "grid") {
    form.style.display = "";
    newTask.innerHTML = "New Task";
  }
}

export {displayTaskList, displayTaskForm};