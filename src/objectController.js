const todo_item = (title, description, dueDate, priority) => {
  const list = () => `${title} - ${description}, ${dueDate}`;
  return {
    list,
    title,
    description,
    dueDate,
    priority
  };
};

export default todo_item