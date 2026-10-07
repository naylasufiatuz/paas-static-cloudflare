// Tombol cek JavaScript (sesuai langkah praktikum)
document.querySelector("#cek").addEventListener("click", () => {
  document.querySelector("#hasil").textContent =
    "JavaScript berhasil berjalan di browser.";
});

// Sapaan sesuai waktu
const jam = new Date().getHours();
let sapa = "Selamat malam!";
if (jam < 11) sapa = "Selamat pagi!";
else if (jam < 15) sapa = "Selamat siang!";
else if (jam < 19) sapa = "Selamat sore!";
document.querySelector("#sapaan").textContent = sapa;

// Tahun footer otomatis
document.querySelector("#tahun").textContent = new Date().getFullYear();

// Animasi bar keahlian saat terlihat
const bars = document.querySelectorAll(".bar");
const isi = (bar) => { bar.firstElementChild.style.width = bar.dataset.level + "%"; };
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { isi(e.target); obs.unobserve(e.target); }
    });
  }, { threshold: 0.4 });
  bars.forEach((b) => obs.observe(b));
} else {
  bars.forEach(isi);
}
