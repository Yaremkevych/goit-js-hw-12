'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', async event => {
  event.preventDefault();
  clearGallery();

  const formData = new FormData(event.target);
  const queryValue = formData.get('search-text').trim();

  if (queryValue.trim() === '') {
    iziToast.show({
      title: '⚠️',
      message: `Please enter a search query!`,
      messageColor: 'white',
      messageSize: '16px',
      backgroundColor: 'red',
      position: 'topRight',
      timeout: 2000,
    });
    formElem.reset();
    return;
  }
  showLoader();

  try {
    const data = await getImagesByQuery(queryValue);

    if (data.hits.length === 0) {
      iziToast.show({
        title: '⚠️',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        messageColor: 'white',
        messageSize: '16px',
        backgroundColor: 'red',
        position: 'topRight',
        timeout: 2000,
      });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.show({
      title: '⚠️',
      message: `Your request is fail!`,
      messageColor: 'white',
      messageSize: '16px',
      backgroundColor: 'red',
      position: 'topRight',
      timeout: 2000,
    });
  } finally {
    hideLoader();
    formElem.reset();
  }
});
