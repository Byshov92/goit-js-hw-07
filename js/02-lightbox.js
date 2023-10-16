import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`
  )
  .join("");

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onPreviewClick);

function onPreviewClick(event) {
  event.preventDefault();
}

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
