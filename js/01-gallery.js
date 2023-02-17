import { galleryItems } from "./gallery-items.js";

function createGalleryElements(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link"
        href="${original}"><img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        /></a>
        </div> `;
    })
    .join("");
}

const galleryElementsContainerRef = document.querySelector(".gallery");
const galleryElements = createGalleryElements(galleryItems);

galleryElementsContainerRef.insertAdjacentHTML("beforeend", galleryElements);

galleryElementsContainerRef.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(e) {
  const isGalleryElement = e.target.classList.contains("gallery__image");
  if (!isGalleryElement) {
    return;
  }
  e.preventDefault();
  const originImages = e.target.dataset.source;
  e.target.src = `${originImages}`;
  const modal = basicLightbox.create(`
  <img
  src="${originImages}"
  alt="picture"
  />
`);
  modal.show();
}
