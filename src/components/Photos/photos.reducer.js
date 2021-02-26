import { PHOTOS_ACTION_TYPES } from './photos.actions';

const INITIAL_STATE = {
  photos: [],
  modalPhoto: {},
  isLoading: false,
  isError: false,
};

const photosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PHOTOS_ACTION_TYPES.PHOTOS_LOADING:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case PHOTOS_ACTION_TYPES.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.photos,
        isError: false,
        isLoading: false,
      };
    case PHOTOS_ACTION_TYPES.FETCH_PHOTOS_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case PHOTOS_ACTION_TYPES.FETCH_MODAL_PHOTO_SUCCESS:
      return {
        ...state,
        modalPhoto: action.photo,
        isError: false,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default photosReducer;
