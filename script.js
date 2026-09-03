const products = [
  {
    name: "Pupuk Organik Cair (POC) 250 ML",
    price: "Rp20.000",
    category: "PUPUK",
    images: ["images/produk/pupuk/poc250ml.png", "images/produk/pupuk/poc250mlbelakang.png"],
    description: `Pupuk Organik Cair (POC) siap pakai: 250ML.

Pupuk  yang dibuat menggunakan bahan organik seperti sayuran dan buah, dengan campuran larutan fermentasi yang baik untuk tanaman.`
  },
  {
    name: "Pupuk Organik Cair (POC) 500 ML",
    price: "Rp50.000",
    category: "PUPUK",
    images: ["images/produk/pupuk/pocrefill500ml.png", "images/produk/pupuk/pocrefill500mlbelakang.png"],
    description: `Pupuk Organik Cair (POC) siap pakai: 250ML.

Pupuk  yang dibuat menggunakan bahan organik seperti sayuran dan buah, dengan campuran larutan fermentasi yang baik untuk tanaman.`
  },
  {
    name: "Pupuk Organik Padat: 1,5 KG",
    price: "Rp25.000",
    category: "PUPUK",
    images: ["images/produk/pupuk/pupukpadat.png"],
    description: `Pupuk Organik Cair (POC) siap pakai: 250ML.

Pupuk  yang dibuat menggunakan bahan organik seperti sayuran dan buah, dengan campuran larutan fermentasi yang baik untuk tanaman.`
  },
  {
    name: "Komposter",
    price: "Rp60.000",
    category: "PERALATAN",
    // Tambahkan foto sebanyak yang diperlukan di array ini.
    images: ["images/produk/komposter/komposter.png"],
    description: `Komposter ember tumpuk tempat pengelolaan sampah organik menjadi pupuk organik cair (POC) dan pupuk organik padat..

Alat ini sangat efisien dalam mengelola sampah organik menjadi barang yang bernilai guna..`
  },
  {
    name: "Gantungan Kunci Stik Es Cream",
    price: "Rp5.000",
    category: "SOUVENIR",
    images: ["images/produk/ganci/ganci1.png", "images/produk/ganci/ganci2.png" ],
    description: `Gantungan Kunci Stik Es Cream yang dibuat dengan teknik transfer gambar dari kertas ke media kayu.`
  },
  {
    name: "Lilin Aromaterapi",
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
      <span class="arrow">→</span>
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
