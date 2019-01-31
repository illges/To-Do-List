import {todo_item, tasks} from './objectController';

const displayTasks = () => {
  const div = document.getElementById('task-list');
  const task = document.createElement('div');
  // task.innerHTML = `${tasks[0].title} -- ${tasks[0].description}`;
  task.innerHTML = tasks[tasks.length -1].list();
  
  div.appendChild(task);
}

const displayForm = () => {
  const form = document.querySelector('.new-task');
  const newTask = document.querySelector('button');
  
  if (form.style.display === "") {
    form.style.display = "grid";
    newTask.innerHTML = "Cancel";
  } else if (form.style.display === "grid") {
    form.style.display = "";
    newTask.innerHTML = "New Task";
  }
}

export {displayTasks, displayForm};