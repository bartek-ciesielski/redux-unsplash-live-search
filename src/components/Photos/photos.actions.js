export const PHOTOS_ACTION_TYPES = {
  PHOTOS_LOADING: 'PHOTOS_LOADING',
  FETCH_PHOTOS_SUCCESS: 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR: 'FETCH_PHOTOS_ERROR',
  FETCH_MODAL_PHOTO_SUCCESS: 'FETCH_MODAL_PHOTO_SUCCESS',
};

export const ACTION_PHOTOS_LOADING = () => {
  return {
    type: PHOTOS_ACTION_TYPES.PHOTOS_LOADING,
  };
};

export const ACTION_FETCH_PHOTOS_SUCCESS = (photos) => {
  return {
    type: PHOTOS_ACTION_TYPES.FETCH_PHOTOS_SUCCESS,
    photos: photos,
  };
};

export const ACTION_FETCH_PHOTOS_ERROR = () => {
  return {
    type: PHOTOS_ACTION_TYPES.FETCH_PHOTOS_ERROR,
  };
};

export const ACTION_FETCH_MODAL_PHOTO_SUCCESS = (photo) => {
  return {
    type: PHOTOS_ACTION_TYPES.FETCH_MODAL_PHOTO_SUCCESS,
    photo: photo,
  };
};