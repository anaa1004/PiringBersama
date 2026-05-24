const loginButton = document.querySelector('.login-btn');

loginButton.addEventListener('click', () => {
  loginButton.innerText = 'Memproses...';

  setTimeout(() => {
    loginButton.innerText = 'Masuk';
    alert('Login berhasil!');
  }, 1500);
});