function restart(){
  location.reload(true)
}
function checkInternetConnection() {
  if (navigator.onLine) {
    document.querySelector('.network-err').style.display = 'none'
  } else {
    document.querySelector('.network-err').style.display = 'grid'
  }
}

// Jalankan fungsi saat halaman dimuat
checkInternetConnection();

// Tambahkan event listener untuk memantau perubahan status koneksi
window.addEventListener('online', () => console.log("Koneksi internet tersambung kembali."));
window.addEventListener('offline', () => console.log("Koneksi internet terputus."));
