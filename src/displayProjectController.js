import {project_item, projects} from './projectController';

const displayProjectList = () => {
  const ul = document.getElementById('project-list');
  const project = document.createElement('li');
  project.classList.add('project-item');
  
  project.innerHTML = projects[projects.length -1];
  
  // ul.appendChild(project);
  ul.appendChild(project);
}

const displayProjectForm = () => {
  const form = document.querySelector('.new-project');
  const newProject = document.querySelector('.project-btn');
  
  if (form.style.display === "") {
    form.style.display = "grid";
    newProject.innerHTML = "Cancel";
  } else if (form.style.display === "grid") {
    form.style.display = "";
    newProject.innerHTML = "New Project";
  }
}

const changeSelected = () => {
  console.log(event.target);
  Array.from(document.querySelectorAll('.project-item'))
    .forEach(item => item.classList.remove('selected'));
  event.target.classList.add('selected');
}

const selectProject = () => {
  const project = Array.from(document.querySelectorAll('.project-item'));
    project.forEach(item => {
      item.addEventListener('click', () => {
      changeSelected();
    })
  });
}

export {displayProjectList, displayProjectForm, selectProject};