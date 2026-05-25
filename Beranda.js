// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.user-menu')) {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  }
});

// Tombol pesan menuju detail menu
document.querySelectorAll('.btn-pesan').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'MenuDetail.html';
  });
});