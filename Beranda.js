// Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.user-menu')) {
      document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
    }
  });