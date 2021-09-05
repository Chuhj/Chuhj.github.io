const todoForm = document.querySelector('form#todo-form');
const todoInput = todoForm.querySelector('input:first-child');
const todoList = document.querySelector('ul#todo-list');
const username = localStorage.getItem('username');

let todos = [];

const TODOS_KEY = 'todos';

function paintTodos(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');

  span.innerText = newTodo.text;
  button.innerText = '💥';
  button.addEventListener('click', deleteTodo);

  li.id = newTodo.id; // 리스트 하나하나를 식별하기 위해 id 부여
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function loadTodos() {
  const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
  if (savedTodos) {
    todos = savedTodos;
    savedTodos.forEach((todo) => {
      paintTodos(todo);
    });
  }
}

function saveTodo(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  paintTodos(newTodoObj);
  todoInput.value = '';
}

function deleteTodo(e) {
  const li = e.target.parentNode;
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  console.log(todos);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  li.remove();
}

if (username !== null) {
  loadTodos();
}

todoForm.addEventListener('submit', saveTodo);
