const todoListContainer = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');

// render todo list
function renderTodoList(todoList) {
  todoListContainer.innerHTML = '';
  const ul = document.createElement('ul');
  todoList.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todo;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.addEventListener('click', () => {
      todoList.splice(index, 1);
      localStorage.setItem(currentUser, JSON.stringify(todoList));
      renderTodoList(todoList);
    });
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
  todoListContainer.appendChild(ul);
}

// handle form submit event
todoForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = todoInput.value.trim();
  if (!todo) return;
  const todoList = JSON.parse(localStorage.getItem(currentUser)) || [];
  todoList.push(todo);
  localStorage.setItem(currentUser, JSON.stringify(todoList));
  todoInput.value = '';
  renderTodoList(todoList);
});

// get current user from local storage
const currentUser = localStorage.getItem('currentUser');
if (currentUser) {
  // get todo list from local storage
  const todoList = JSON.parse(localStorage.getItem(currentUser)) || [];
  // render todo list
  renderTodoList(todoList);
} else {
  // redirect to login page
  window.location.href = "login.html";
}
