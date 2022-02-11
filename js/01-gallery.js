import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createMarkupItems = ({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
const createGalleryMarkup = galleryItems.map(createMarkupItems).join("");
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup);

const modalWindow = (src) => {
  const onEscPress = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  const instance = basicLightbox.create(`<img src="${src}"></img>`, {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscPress);
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscPress);
    },
  });
  instance.show();
};

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  modalWindow(event.target.dataset.source);
});
