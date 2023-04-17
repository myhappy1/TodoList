const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

// load current user's todos from local storage
const currentUser = localStorage.getItem('currentUser');
let todos = JSON.parse(localStorage.getItem(currentUser)) || [];

// display user's todos
todos.forEach((todo) => {
  const li = document.createElement('li');
  li.innerText = todo;
  todoList.appendChild(li);
});

// handle form submit event
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoInput = event.target['todo-input'];
  const todoText = todoInput.value.trim();
  if (todoText) {
    todos.push(todoText);
    localStorage.setItem(currentUser, JSON.stringify(todos));
    const li = document.createElement('li');
    li.innerText = todoText;
    todoList.appendChild(li);
    todoInput.value = '';
  }
});

// handle todo list item click event
todoList.addEventListener('click', (event) => {
  const li = event.target;
  const todoIndex = Array.from(todoList.children).indexOf(li);
  todos.splice(todoIndex, 1);
  localStorage.setItem(currentUser, JSON.stringify(todos));
  li.remove();
});

// handle clear all button click event
const clearAllButton = document.getElementById('clear-all-button');
clearAllButton.addEventListener('click', () => {
  // remove all todos from local storage and todo list
  todos = [];
  localStorage.setItem(currentUser, JSON.stringify(todos));
  todoList.innerHTML = '';
});
