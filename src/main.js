'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import {
  refs,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const showErrorToast = error => {
  iziToast.show({
    title: '⚠️',
    error,
    messageColor: 'white',
    messageSize: '16px',
    backgroundColor: 'red',
    position: 'topRight',
    timeout: 1500,
  });
};

const formElem = document.querySelector('.form');
let queryValue;
let currentPage;
let totalPages;

formElem.addEventListener('submit', async event => {
  event.preventDefault();
  clearGallery();
  showLoader();
  hideLoadMoreButton();
  const formData = new FormData(event.target);
  queryValue = formData.get('search-text').trim();
  currentPage = 1;

  if (!queryValue) {
    showErrorToast(`Please enter a search query!`);
    formElem.reset();
    return;
  }

  try {
    const data = await getImagesByQuery(queryValue, currentPage);

    if (!data.hits.length) {
      showErrorToast(
        `Sorry, there are no images matching your search query. Please try again!`
      );
    } else {
      createGallery(data.hits);
      totalPages = Math.ceil(data.totalHits / PER_PAGE);
      if (totalPages > currentPage) {
        showLoadMoreButton();
      }
    }
  } catch (error) {
    showErrorToast(`Your request is fail!`);
  } finally {
    hideLoader();
    formElem.reset();
  }
});

refs.loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;
  showLoader();
  hideLoadMoreButton();
  try {
    const data = await getImagesByQuery(queryValue, currentPage);
    createGallery(data.hits);
    const galleryCard = document
      .querySelector('.gallery-item')
      .getBoundingClientRect().height;

    window.scrollBy({
      top: galleryCard * 2,
      behavior: 'smooth',
    });

    if (totalPages > currentPage) {
      showLoadMoreButton();
    } else {
      showErrorToast(
        `We're sorry, but you've reached the end of search results.`
      );
    }
  } catch (error) {
    showErrorToast('Your request is fail!');
    showLoadMoreButton();
  } finally {
    hideLoader();
  }
});
