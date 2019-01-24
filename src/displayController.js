import sleep from './index';
import todo_item from './objectController';

const display = (item) => {
  const content = document.querySelector('#content');
  const task = document.createElement('div');
  task.innerHTML = item.list();

  content.appendChild(task);
}

const loadPage = (() => {
  const content = document.querySelector('#content');

})();

export default display