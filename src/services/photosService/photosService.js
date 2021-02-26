import {
  ACTION_PHOTOS_LOADING,
  ACTION_FETCH_PHOTOS_SUCCESS,
  ACTION_FETCH_PHOTOS_ERROR,
  ACTION_FETCH_MODAL_PHOTO_SUCCESS,
} from '../../components/Photos/photos.actions';

import { unsplash, getPhotosConfig } from './consts';

export const ACTION_FETCH_PHOTOS_INIT = (query) => (dispatch) => {
  dispatch(ACTION_PHOTOS_LOADING());
  unsplash.search
    .getPhotos({ query: query, ...getPhotosConfig })
    .then((result) => {
      const feed = result.response;
      dispatch(ACTION_FETCH_PHOTOS_SUCCESS(feed.results));
    })
    .catch(() => {
      dispatch(ACTION_FETCH_PHOTOS_ERROR());
    });
};

export const ACTION_FETCH_MODAL_PHOTO_INIT = (photoId) => (dispatch) => {
  dispatch(ACTION_PHOTOS_LOADING());
  unsplash.photos
    .get({ photoId: photoId })
    .then((result) => {
      const feed = result.response;
      dispatch(ACTION_FETCH_MODAL_PHOTO_SUCCESS(feed));
    })
    .catch(() => {
      dispatch(ACTION_FETCH_PHOTOS_ERROR());
    });
};
