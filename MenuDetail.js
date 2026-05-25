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

document.getElementById('notifBtn').addEventListener('click', function () {
  tampilkanToast('Tidak ada notifikasi baru.');

  const badge = this.querySelector('.notif-badge');
  if (badge) badge.style.display = 'none';
});

document.getElementById('btnCart').addEventListener('click', function () {
  tampilkanToast('Nasi Goreng Spesial ditambahkan ke keranjang!');
});


const modalOverlay = document.getElementById('modalOverlay');
const qtyVal       = document.getElementById('qtyVal');
const modalTotal   = document.getElementById('modalTotal');
const hargaSatuan  = 24500;
let jumlah         = 1;

document.getElementById('btnOrder').addEventListener('click', function () {
  jumlah = 1;
  qtyVal.textContent      = 1;
  modalTotal.textContent  = 'Rp24.500';
  modalOverlay.classList.add('open');
});

document.getElementById('modalClose').addEventListener('click', function () {
  modalOverlay.classList.remove('open');
});

modalOverlay.addEventListener('click', function (e) {
  if (e.target === modalOverlay) modalOverlay.classList.remove('open');
});

document.getElementById('qtyPlus').addEventListener('click', function () {
  if (jumlah < 2) {                        // maksimal 2 porsi (sesuai sisa stok)
    jumlah++;
    perbaruiJumlah();
  } else {
    tampilkanToast('Maksimal 2 porsi tersedia!');
  }
});

document.getElementById('qtyMinus').addEventListener('click', function () {
  if (jumlah > 1) {
    jumlah--;
    perbaruiJumlah();
  }
});

function perbaruiJumlah() {
  qtyVal.textContent     = jumlah;
  const total            = jumlah * hargaSatuan;
  modalTotal.textContent = 'Rp' + total.toLocaleString('id-ID');
}

document.getElementById('modalConfirm').addEventListener('click', function () {
  modalOverlay.classList.remove('open');
  tampilkanToast('Pesanan ' + jumlah + ' porsi berhasil dikonfirmasi!');
});


let timerToast;

function tampilkanToast(pesan) {
  const toast       = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = pesan;
  toast.classList.add('show');

  clearTimeout(timerToast);
  timerToast = setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}
