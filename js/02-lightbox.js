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
galleryElementsList.addEventListener("click", onGalleryListClick);

function onGalleryListClick(e) {
  const isGalleryElement = e.target.classList.contains("gallery__image");
  if (!isGalleryElement) {
    return;
  }
  e.preventDefault();

  const originImages = e.target.parentElement.href;
  e.target.src = `${originImages}`;
}

const lightbox = new SimpleLightbox(".gallery__item");
console.log("Не смог сделать задержку, не понимаю как и куда её подключать )");
