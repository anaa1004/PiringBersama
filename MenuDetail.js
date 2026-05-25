// Dropdown user
const userMenuBtn = document.getElementById('userMenuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

userMenuBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  dropdownMenu.classList.toggle('open');
});

// Close dropdown
document.addEventListener('click', function(e) {
  if (!e.target.closest('.user-menu')) {
    dropdownMenu.classList.remove('open');
  }
});

// Toast
const toast = document.getElementById('toast');
const btnCart = document.getElementById('btnCart');

btnCart.addEventListener('click', () => {
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
});

// Modal
const modalOverlay = document.getElementById('modalOverlay');
const btnOrder = document.getElementById('btnOrder');
const modalClose = document.getElementById('modalClose');

btnOrder.addEventListener('click', () => {
  modalOverlay.classList.add('open');
});

modalClose.addEventListener('click', () => {
  modalOverlay.classList.remove('open');
});

modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('open');
  }
});

// Quantity
let qty = 1;
const qtyVal = document.getElementById('qtyVal');
const modalTotal = document.getElementById('modalTotal');

document.getElementById('qtyPlus').addEventListener('click', () => {
  qty++;
  updateQty();
});

document.getElementById('qtyMinus').addEventListener('click', () => {
  if (qty > 1) {
    qty--;
    updateQty();
  }
});

function updateQty() {
  qtyVal.innerText = qty;
  modalTotal.innerText = `Rp${(24500 * qty).toLocaleString('id-ID')}`;
}

// Lihat semua menu
document.getElementById('btnSeeAll').addEventListener('click', () => {
  window.location.href = 'index.html';
});

// Konfirmasi pesanan
document.getElementById('modalConfirm').addEventListener('click', () => {
  alert('Pesanan berhasil dibuat!');
  modalOverlay.classList.remove('open');
});