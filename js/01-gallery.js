import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`
  )
  .join("");

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onPreviewClick);

function onPreviewClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  let instance = basicLightbox.create(
    `
  <img
    class="gallery__image"
    src="${event.target.dataset.source}"
    alt="${event.target.alt}"
  />
`,
    {
      onShow: () => {
        window.addEventListener("keyup", onEscapeClose);
        },
        
    }
  );

  instance.show();

  function onEscapeClose(event) {
    if (event.key === "Escape") {
      instance.close();
      window.removeEventListener("keyup", onEscapeClose);
    }
  }
}
