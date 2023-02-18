import { galleryItems } from "./gallery-items.js";
// Change code below this line
function createGalleryElements(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="" title="${description}" />
    </a>
        `;
    })
    .join("");
}

const galleryElementsList = document.querySelector(".gallery");
const galleryElements = createGalleryElements(galleryItems);

galleryElementsList.insertAdjacentHTML("beforeend", galleryElements);

const lightbox = new SimpleLightbox(".gallery__item");
