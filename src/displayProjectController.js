import {project_item, projects} from './projectController';

const initProjects = () => {
  projects.push(project_item('General', true));
  displayProjectList();
}

const displayProjectList = () => {
  const ul = document.getElementById('project-list');
  const project = document.createElement('li');
  
  Array.from(document.querySelectorAll('li'))
    .forEach(item => item.classList.remove('selected'));
  
  project.classList.add('project-item', 'selected');

  
  project.innerHTML = projects[projects.length -1].title;
  
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
  console.log(event.target.innerHTML);

  Array.from(document.querySelectorAll('.project-item'))
    .forEach((item, index) => {
      item.classList.remove('selected');
      if (projects[index].title === event.target.innerHTML) {
        projects[index].selected = true;
      } else {
        projects[index].selected = false;
      }
    });

  event.target.classList.add('selected');
  return console.log(projects)
}

const selectProject = () => {
  const project = Array.from(document.querySelectorAll('.project-item'));
    project.forEach(item => {
      item.addEventListener('click', () => {
      changeSelected();
    })
  });
}

export {displayProjectList, displayProjectForm, selectProject, initProjects};