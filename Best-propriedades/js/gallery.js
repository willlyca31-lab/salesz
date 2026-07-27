/* =====================================================
   BEST RENTAS DE CUARTOS
   GALLERY.JS
   Compatible con rooms.json
===================================================== */

let galleryModal = null;
let galleryImages = [];
let currentImage = 0;

/* =====================================================
   INITIALIZE GALLERY
===================================================== */

function initGallery() {

    galleryImages = Array.from(
        document.querySelectorAll(".gallery-item img, .room-image img")
    );

    if (galleryImages.length === 0) {
        return;
    }

    if (!galleryModal) {

        galleryModal = document.createElement("div");

        galleryModal.className = "gallery-modal";

        galleryModal.innerHTML = `

            <button class="gallery-close">
                <i class="fa-solid fa-xmark"></i>
            </button>

            <button class="gallery-prev">
                <i class="fa-solid fa-chevron-left"></i>
            </button>

            <img class="gallery-preview" src="" alt="Vista previa">

            <button class="gallery-next">
                <i class="fa-solid fa-chevron-right"></i>
            </button>

        `;

        document.body.appendChild(galleryModal);

        galleryModal
            .querySelector(".gallery-close")
            .addEventListener("click", closeGallery);

        galleryModal
            .querySelector(".gallery-prev")
            .addEventListener("click", previousImage);

        galleryModal
            .querySelector(".gallery-next")
            .addEventListener("click", nextImage);

        galleryModal.addEventListener("click", (event) => {

            if (event.target === galleryModal) {
                closeGallery();
            }

        });

        document.addEventListener("keydown", (event) => {

            if (!galleryModal.classList.contains("active")) {
                return;
            }

            if (event.key === "Escape") {
                closeGallery();
            }

            if (event.key === "ArrowRight") {
                nextImage();
            }

            if (event.key === "ArrowLeft") {
                previousImage();
            }

        });

    }

    galleryImages.forEach((image, index) => {

        image.style.cursor = "pointer";

        image.onclick = () => {

            currentImage = index;

            showImage();

            galleryModal.classList.add("active");

        };

    });

}

/* =====================================================
   SHOW IMAGE
===================================================== */

function showImage() {

    const preview = galleryModal.querySelector(".gallery-preview");

    preview.src = galleryImages[currentImage].src;

    preview.alt = galleryImages[currentImage].alt;

}

/* =====================================================
   NEXT IMAGE
===================================================== */

function nextImage() {

    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    showImage();

}

/* =====================================================
   PREVIOUS IMAGE
===================================================== */

function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    showImage();

}

/* =====================================================
   CLOSE GALLERY
===================================================== */

function closeGallery() {

    galleryModal.classList.remove("active");

}

/* =====================================================
   INITIAL LOAD
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initGallery();

});
