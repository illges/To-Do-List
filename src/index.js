import todo_item from './objectController';
import display from './displayController'

const sleep = todo_item('sleep', 'go to bed', 'now', 'high');
// sleep.list();

display(sleep);

export default sleep