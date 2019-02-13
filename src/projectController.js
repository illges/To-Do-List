var projects = [];

const project_item = (title, selected) => {
  title
  selected
  return {
    title,
    selected
  };
}

const updateProjects = () => {
  const form = {
		title : document.getElementById('project-title').value
  };
  
  projects.forEach(item => {item.selected = false});

  if (form.title) {
    projects.push(project_item(form.title, true));
    return console.log(projects)
  } else {
    alert('Please fill out the form correctly!');
  }
  
}

export {project_item, updateProjects, projects};