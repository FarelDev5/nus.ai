function detectPlatform() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Cek apakah sedang berjalan di Android WebView (APK)
  const isInApp = !!window.navigator.standalone || 
                  userAgent.includes("wv") || 
                  (userAgent.includes("Android") && userAgent.includes("Version"));

  const popupContainer = document.querySelector('.popup--container');

  if (isInApp) {
    if (popupContainer) {
      popupContainer.style.bottom = "-100%";
    }
    return "apk";
  } else {
    if (popupContainer) {
      setTimeout(() => {
        popupContainer.style.bottom = "0%";
      }, 100);
    }
    return "website";
  }
}

// Jalankan deteksi platform
const platform = detectPlatform();
console.log(`Platform yang terdeteksi: ${platform}`);
