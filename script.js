const products = [
  {
    name: "Pupuk Organik Cair (POC) 250 ML",
    price: "Rp25.000",
    category: "PUPUK",
    images: ["images/produk/pupuk/poc250ml.png", "images/produk/pupuk/poc250mlbelakang.png"],
    description: `Pupuk Organik Cair (POC) siap pakai: 250ML.

    Pupuk yang dibuat dari fermentasi bahan organik (sayur & buah) berkualitas menggunakan metode Komposter Ember Tumpuk. Melalui proses fermentasi terukur selama 14 hari dengan aktivator EM4 & molase, POC ini menghasilkan nutrisi cair murni yang siap diserap oleh tanaman.

    Keunggulan:
    1. Murni dari sisa sampah organik pilihan
    2. Memperbaiki struktur tanah dan menyuburkan tanaman
    3. Praktis, alami, dan ramah lingkungan
    
    semprotkan ke tanaman secukupnya setidaknya 2 kali seminggu.`

    
  },
  {
    name: "Pupuk Organik Cair (POC) 500 ML",
    price: "Rp50.000",
    category: "PUPUK",
    images: ["images/produk/pupuk/pocrefill500ml.png", "images/produk/pupuk/pocrefill500mlbelakang.png"],
    description: `Pupuk Organik Cair (POC) Isi ulang: 500ML.

    Pupuk yang dibuat dari fermentasi bahan organik (sayur & buah) berkualitas menggunakan metode Komposter Ember Tumpuk. Melalui proses fermentasi terukur selama 14 hari dengan aktivator EM4 & molase, POC ini menghasilkan nutrisi cair murni yang siap diserap oleh tanaman.

    Keunggulan:
    1. Murni dari sisa sampah organik pilihan
    2. Memperbaiki struktur tanah dan menyuburkan tanaman
    3. Praktis, alami, dan ramah lingkungan
    
    Dosis & Cara Pengaplikasian:
    1. Larutkan 10 ml POC ke dalam 1–2 liter air bersih.
    2. Semprotkan secara merata ke bagian daun/batang, atau kocorkan ke tanah area perakaran.
    3. Aplikasikan 1–2 kali seminggu pada pagi hari (sebelum jam 9) atau sore hari (setelah jam 4).`
  },
  {
    name: "Pupuk Organik Padat: 1,5 KG",
    price: "Rp25.000",
    category: "PUPUK",
    images: ["images/produk/pupuk/pupukpadat.png"],
    description: `Pupuk Organik Padat.

    Pupuk organik padat yang dihasilkan dari bagian atas sistem Komposter Ember Tumpuk. Dibuat dari campuran sampah organik pilihan (sayur & buah), sekam, serta tanah yang telah melewati proses dekomposisi dan fermentasi sempurna menggunakan aktivator EM4 dan molase.

    Keunggulan:
    1. Kaya akan unsur hara makro & mikro alami
    2. Memperbaiki gembur dan struktur media tanam
    3. Meningkatkan daya simpan air dan nutrisi pada tanah
    4. Alami, matang sempurna, dan bebas bau busuk

    Cara Pengaplikasian:
    1. Campurkan pupuk padat ke media tanam dengan perbandingan 1:3 atau 1:4 (1 bagian kompos : 3 bagian tanah).
    2. Untuk tanaman dalam pot/polibag, tambahkan 1–2 genggam di sekitar perakaran setiap 2–4 minggu sekali.
    3. Siram media tanam dengan air secukupnya setelah pemupukan.`
  },
  {
    name: "Komposter ember tumpuk",
    price: "Rp60.000",
    category: "PERALATAN",
    // Tambahkan foto sebanyak yang diperlukan di array ini.
    images: ["images/produk/komposter/komposter.png"],
    description: `Solusi praktis dan ramah lingkungan untuk mengolah sampah organik rumah tangga menjadi Pupuk Organik Cair (POC) dan Pupuk Organik Padat (Kompos) secara bersamaan di rumah.

    Sistem Kerja Duo-Fungsi:
    1. Ember Bagian Atas: Tempat menampung sampah organik (sayur, buah, sekam/tanah) untuk diproses menjadi Pupuk Organik Padat.
    2. Ember Bagian Bawah: Wadah penampung tetesan ekstraksi cairan bio-fermentasi yang menghasilkan Pupuk Organik Cair (POC) berkualitas tinggi.

    Keunggulan:
    1. Efisien, hemat tempat, dan mudah digunakan di area pekarangan/rumah.
    2. Dilengkapi keran di bagian bawah untuk kemudahan pemanenan POC.
    3. Desain tertutup rapat sehingga meminimalisir bau tidak sedap dan masuknya lalat.
    4. Mengubah limbah dapur menjadi produk bernilai guna tinggi.

    Cara Penggunaan:
    1. Masukkan sampah organik pilihan (potongan sayur/buah) ke ember atas.
    2. Semprotkan cairan starter (EM4 + larutan gula/molase) secukupnya pada sampah.
    3. Tutup ember dengan rapat dan biarkan proses fermentasi berlangsung secara alami.
   `
  },
  {
    name: "Gantungan Kunci Stik Es Cream",
    price: "Rp5.000",
    category: "SOUVENIR",
    images: ["images/produk/ganci/ganci1.png", "images/produk/ganci/ganci2.png", "images/produk/ganci/ganci3.png", "images/produk/ganci/ganci7.png" , "images/produk/ganci/ganci8.jpg", "images/produk/ganci/ganci9.jpg", "images/produk/ganci/ganci10.jpg"],
    description: `Gantungan Kunci Stik Es Cream yang dibuat dengan teknik transfer gambar dari kertas ke media kayu.`
  },
  {
    name: "Lilin Aromaterapi Minyak Jelantah",
    price: "Rp5.000",
    category: "SOUVENIR",
    images: ["images/produk/lilin/lilin1.png", "images/produk/lilin/lilin2.png", "images/produk/lilin/lilin3.png"],
    description: `Lilin ber aromaterapi yang dibuat dengan bahan minyak jelantah bekas.`
  },
];

const grid = document.getElementById("productGrid");
const count = document.getElementById("productCount");
const modal = document.getElementById("detailModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModal = document.getElementById("closeModal");

const detailImage = document.getElementById("detailImage");
const detailCategory = document.getElementById("detailCategory");
const detailTitle = document.getElementById("detailTitle");
const detailPrice = document.getElementById("detailPrice");
const detailDescription = document.getElementById("detailDescription");
const thumbnailList = document.getElementById("thumbnailList");
const photoCounter = document.getElementById("photoCounter");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

let currentProduct = null;
let currentPhoto = 0;

function renderProducts() {
  grid.innerHTML = products.map((product, index) => `
    <article class="product-card" data-index="${index}" tabindex="0">
      <img class="product-image" src="${product.images[0]}" alt="${product.name}">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">${product.price}</p>
      </div>
    </article>
  `).join("");

  count.textContent = `${products.length} produk`;

  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => openDetail(Number(card.dataset.index)));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDetail(Number(card.dataset.index));
      }
    });
  });
}

function updatePhoto() {
  const images = currentProduct.images;
  detailImage.src = images[currentPhoto];
  detailImage.alt = `${currentProduct.name} - foto ${currentPhoto + 1}`;

  photoCounter.textContent = `${currentPhoto + 1} / ${images.length}`;

  document.querySelectorAll(".thumbnail").forEach((thumb, index) => {
    thumb.classList.toggle("active", index === currentPhoto);
  });

  prevPhoto.style.display = images.length > 1 ? "grid" : "none";
  nextPhoto.style.display = images.length > 1 ? "grid" : "none";
  photoCounter.style.display = images.length > 1 ? "block" : "none";
  thumbnailList.style.display = images.length > 1 ? "flex" : "none";
}

function renderThumbnails() {
  thumbnailList.innerHTML = currentProduct.images.map((image, index) => `
    <button class="thumbnail ${index === currentPhoto ? "active" : ""}"
            type="button" aria-label="Pilih foto ${index + 1}" data-photo="${index}">
      <img src="${image}" alt="Thumbnail ${index + 1}">
    </button>
  `).join("");

  document.querySelectorAll(".thumbnail").forEach(button => {
    button.addEventListener("click", () => {
      currentPhoto = Number(button.dataset.photo);
      updatePhoto();
    });
  });
}

function openDetail(index) {
  currentProduct = products[index];
  currentPhoto = 0;

  detailCategory.textContent = currentProduct.category;
  detailTitle.textContent = currentProduct.name;
  detailPrice.textContent = currentProduct.price;
  detailDescription.textContent = currentProduct.description;

  renderThumbnails();
  updatePhoto();

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function hideDetail() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function changePhoto(step) {
  if (!currentProduct || currentProduct.images.length <= 1) return;
  const total = currentProduct.images.length;
  currentPhoto = (currentPhoto + step + total) % total;
  updatePhoto();
}

closeModal.addEventListener("click", hideDetail);
modalBackdrop.addEventListener("click", hideDetail);
prevPhoto.addEventListener("click", () => changePhoto(-1));
nextPhoto.addEventListener("click", () => changePhoto(1));

document.addEventListener("keydown", e => {
  if (!modal.classList.contains("show")) return;

  if (e.key === "Escape") hideDetail();
  if (e.key === "ArrowLeft") changePhoto(-1);
  if (e.key === "ArrowRight") changePhoto(1);
});

renderProducts();



/* ================= NAVBAR MOBILE ================= */

// const menuToggle = document.getElementById("menuToggle");
// const navMenu = document.getElementById("navMenu");

// if (menuToggle && navMenu) {
//   menuToggle.addEventListener("click", () => {
//     navMenu.classList.toggle("show");
//   });

//   navMenu.querySelectorAll("a").forEach(link => {
//     link.addEventListener("click", () => {
//       navMenu.classList.remove("show");
//     });
//   });
// }


/* ================= HERO CAROUSEL ================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slideTimer;

function showSlide(index) {
  if (!slides.length) return;

  currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function startSlider() {
  clearInterval(slideTimer);

  if (slides.length > 1) {
    slideTimer = setInterval(nextSlide, 5000);
  }
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    startSlider();
  });
});

showSlide(0);
startSlider();


/* ================= SIDE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const sideOverlay = document.getElementById("sideOverlay");
const sideClose = document.getElementById("sideClose");

function openSideMenu() {
  sideMenu.classList.add("show");
  sideOverlay.classList.add("show");

  document.body.classList.add("menu-open");
}

function closeSideMenu() {
  sideMenu.classList.remove("show");
  sideOverlay.classList.remove("show");

  document.body.classList.remove("menu-open");
}


/* BUKA HAMBURGER */

if (menuToggle) {
  menuToggle.addEventListener("click", openSideMenu);
}


/* TOMBOL X */

if (sideClose) {
  sideClose.addEventListener("click", closeSideMenu);
}


/* KLIK AREA GELAP */

if (sideOverlay) {
  sideOverlay.addEventListener("click", closeSideMenu);
}


/* KLIK MENU */

document.querySelectorAll(".side-menu a").forEach(link => {

  link.addEventListener("click", () => {
    closeSideMenu();
  });

});

/* ================= PESAN VIA WHATSAPP ================= */

const orderButton = document.getElementById("orderButton");

if (orderButton) {
  orderButton.addEventListener("click", function (e) {
    e.preventDefault();

    const nomorAdmin = "6289699985972";

    const pesan = `Halo Admin KKN-T 07 Candipari 👋

Saya ingin melakukan pemesanan produk.

1. Nama Produk:
2. Jumlah Produk:
3. Nama Pemesan:
4. Alamat:
5. Nomor WhatsApp:

Mohon diinformasikan total harga dan proses selanjutnya.

Terima kasih 🙏`;

    const url = "https://wa.me/" + nomorAdmin + "?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
  });
}
