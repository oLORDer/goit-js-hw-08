import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galerry = document.querySelector('.gallery');

galerry.insertAdjacentHTML('beforeend', createImg(galleryItems));

function createImg(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href=${original}>
        <img class="gallery__image"
        src=${preview}
        alt=${description} />
    </a>
    `;
    })
    .join('');
}

const lightboxGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
