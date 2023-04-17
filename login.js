const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('login-username');
const passwordInput = document.getElementById('login-password');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find((user) => user.username === username && user.password === password);
  
  if (!user) {
    alert('아이디 또는 비밀번호를 확인해주세요');
    return;
  }
  
  localStorage.setItem('currentUser', username);
  window.location.href = "main.html";
});