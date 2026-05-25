  document.addEventListener('click', function(e) {
    if (!e.target.closest('.user-menu')) {
      document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
    }
  });

  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  document.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      if (this.querySelector('svg')) return;
      document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Klik card menuju detail menu
document.querySelectorAll('.food-card').forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = 'MenuDetail.html';
  });
});