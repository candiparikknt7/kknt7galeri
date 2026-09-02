const products = [
  {
    name: "Komposter",
    price: "Rp60.000",
    category: "PERALATAN",
    // Tambahkan foto sebanyak yang diperlukan di array ini.
    images: ["images/komposter_kknt7_candipari_1.jpg", "images/komposter_2.jpg"],
    description: `Komposter ember tumpuk tempat pengelolaan sampah organik menjadi pupuk organik cair (POC) dan pupuk organik padat..

Alat ini sangat efisien dalam mengelola sampah organik menjadi barang yang bernilai guna..`
  },
  {
    name: "Pupuk Organik Cair (POC) 250 ML",
    price: "Rp20.000",
    category: "PUPUK",
    images: ["images/poc_1.jpg", "images/poc_1.jpg"],
    description: `Pupuk Organik Cair (POC) siap pakai: 250ML.

Pupuk  yang dibuat menggunakan bahan organik seperti sayuran dan buah, dengan campuran larutan fermentasi yang baik untuk tanaman.`
  },
  {
    name: "Pupuk Organik Cair (POC) 500 ML",
    price: "Rp40.000",
    category: "PUPUK",
    images: ["images/poc_2.jpeg"],
    description: `Pupuk Organik Cair (POC) siap pakai: 250ML.

Pupuk  yang dibuat menggunakan bahan organik seperti sayuran dan buah, dengan campuran larutan fermentasi yang baik untuk tanaman.`
  },
  {
    name: "Gantungan Kunci Stik Es Cream",
    price: "Rp5.000",
    category: "SOUVENIR",
      images: ["images/ganci2.jpg", "images/ganci1.jpg"],
    description: `Gantungan Kunci Stik Es Cream yang dibuat dengan teknik transfer gambar dari kertas ke media kayu.`
  },
  {
    name: "Lilin Aromaterapi",
    price: "Rp5.000",
    category: "SOUVENIR",
    images: ["images/lilin.jpg"],
    description: `Lilin ber aromaterapi yang dibuat dengan bahan minyak jelantah bekas.`
  },
  {
    name: "Dompet Kulit",
    price: "Rp125.000",
    category: "AKSESORI",
    images: ["images/produk-6.svg"],
    description: `Dompet dengan desain ringkas untuk menyimpan kartu dan kebutuhan kecil.`
  },
  {
    name: "Tas Serbaguna",
    price: "Rp110.000",
    category: "FASHION",
    images: ["images/produk-7.svg"],
    description: `Tas praktis dengan desain sederhana untuk membawa barang-barang sehari-hari.`
  },
  {
    name: "Earphone",
    price: "Rp159.000",
    category: "ELEKTRONIK",
    images: ["images/produk-8.svg"],
    description: `Earphone bergaya minimalis yang cocok untuk mendengarkan musik dan menemani aktivitas.`
  },
  {
    name: "Tanaman Hias",
    price: "Rp75.000",
    category: "RUMAH",
    images: ["images/produk-9.svg"],
    description: `Tanaman hias mungil yang cocok untuk mempercantik meja kerja atau sudut ruangan.`
  }
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
