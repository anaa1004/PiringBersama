const loginButton = document.querySelector('.login-btn');

loginButton.addEventListener('click', () => {
  loginButton.innerText = 'Memproses...';

  setTimeout(() => {
    loginButton.innerText = 'Masuk';
    alert('Login berhasil!');

    // pindah ke halaman beranda
    window.location.href = 'Beranda.html';

  }, 1500);
});