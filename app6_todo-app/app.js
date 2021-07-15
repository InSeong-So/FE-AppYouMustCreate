const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

const getTodos = JSON.parse(localStorage.getItem('todos'));
if (getTodos) {
  getTodos.forEach(todo => {
    addTodo(todo);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  addTodo();
});

function addTodo(todo = {}) {
  let todoText = input.value;

  if (todo && todo.completed) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo.completed) {
      todoEl.classList.add('completed');
    }
    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed');

      updateLocalStorage();
    });

    todoEl.addEventListener('contextmenu', event => {
      event.preventDefault();

      todoEl.remove();

      updateLocalStorage();
    });

    todos.appendChild(todoEl);

    input.value = '';

    updateLocalStorage();
  }
}

function updateLocalStorage() {
  const todosEl = document.querySelectorAll('li');

  const todos = [];

  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}
