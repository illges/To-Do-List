var tasks = [];

const todo_item = (project, title, description, dueDate, priority) => {
  const list = () => `${title} - ${dueDate}\n ${description}\n Priority: ${priority}`;
  return {
    list,
    project,
    title,
    description,
    dueDate,
    priority
  };
}

const updateTasks = () => {
  const form = {
		title : document.getElementById('input-title').value,
		description : document.getElementById('input-description').value,
		targetDate : document.getElementById('input-date').value,
		priority : document.getElementById('input-priority').checked ? 
				'High' :
				'Low'
  };

  if (form.title && form.description && form.targetDate) {
    tasks.push(todo_item(2, form.title, form.description, form.targetDate, form.priority));
    return console.log(tasks)
  } else {
    alert('Please fill out the form correctly!');
  }
  
}

export {todo_item, updateTasks, tasks};