import { todo_item, updateTasks, tasks } from "./taskController";
import { displayTaskList, displayTaskForm } from "./displayTaskController";
import {updateProjects} from './projectController';
import {
  displayProjectList,
  displayProjectForm,
  selectProject,
  initProjects
} from "./displayProjectController";

initProjects();

const newTask = document.querySelector('.task-btn');
newTask.addEventListener('click', () => {
  displayTaskForm();
  document.querySelector('.new-task').reset();
});

const addTask = document.querySelector('.add-task');
addTask.addEventListener('click', () => {
  updateTasks();
  displayTaskList();
  displayTaskForm();
  document.querySelector('.new-task').reset();
});

const newProject  = document.querySelector('.project-btn');
newProject.addEventListener('click', () => {
  displayProjectForm();
  document.querySelector('.new-project').reset();
});

const addProject  = document.querySelector('.add-project');
addProject.addEventListener('click', () => {
  updateProjects();
  displayProjectList();
  displayProjectForm();
  document.querySelector('.new-project').reset();
  selectProject();
});


