import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

function imageTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}">
            </a>
            <ul class="image-statistic">
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Likes</h3>
                    <p class="statistic-value">${likes}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Views</h3>
                    <p class="statistic-value">${views}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Comments</h3>
                    <p class="statistic-value">${comments}</p>
                </li>
                <li class="image-statistic-item">
                    <h3 class="statistic-name">Downloads</h3>
                    <p class="statistic-value">${downloads}</p>
                </li>
            </ul>
          </li>`;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images.map(imageTemplate).join('');
  refs.gallery.innerHTML = markup;
  lightbox.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}
