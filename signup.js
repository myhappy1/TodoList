// 회원가입 폼 참조
const signupForm = document.getElementById('signup-form');

// 회원가입 버튼 클릭 시
signupForm.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 동작 중지

  // 입력된 사용자 이름과 비밀번호를 가져옴
  const username = document.getElementById('signup-username').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-password-confirm').value;

  // 비밀번호와 비밀번호 확인이 일치하지 않을 경우 알림을 표시하고 함수를 종료함
  if (password !== confirmPassword) {
    alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    return;
  }

  // 로컬 스토리지에서 사용자 정보를 가져옴
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // 새로운 사용자 정보를 users 배열에 추가함
  users.push({
    username,
    password
  });

  // 업데이트된 users 배열을 로컬 스토리지에 저장함
  localStorage.setItem('users', JSON.stringify(users));

  // 회원가입 완료 메시지를 표시하고 로그인 페이지로 이동함
  alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
  window.location.href = 'index.html';
});
