var tasks = [];

const todo_item = (title, description, dueDate, priority) => {
  const list = () => `${title} - ${description}, ${dueDate}`;
  return {
    list,
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
  
  tasks.push(todo_item(form.title, form.description, form.targetDate, form.priority));

  return console.log(tasks)
}

export {todo_item, updateTasks, tasks};