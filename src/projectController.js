var projects = [];

const project_item = (title) => {
  title
  return title
}

const updateProjects = () => {
  const form = {
		title : document.getElementById('project-title').value
  };
  
  projects.push(project_item(form.title));

  return console.log(projects)
}

export {project_item, updateProjects, projects};