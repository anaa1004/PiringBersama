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
