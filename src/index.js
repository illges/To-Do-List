import {todo_item, updateTasks, tasks} from './objectController';
import {displayTasks, displayForm} from './displayController';


const newTask = document.querySelector('button');
newTask.addEventListener('click', () => {
  displayForm();
  document.querySelector('.new-task').reset();
});

const addTask = document.querySelector('.add-task');
addTask.addEventListener('click', e => {
  // validateForm();
  updateTasks();
  displayTasks();
  displayForm();
  document.querySelector('.new-task').reset();
});
