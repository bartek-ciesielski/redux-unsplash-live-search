import axios from 'axios';

import {
  ACTION_HINTS_LOADING,
  ACTION_FETCH_HINTS_SUCCESS,
  ACTION_FETCH_HINTS_ERROR,
  ACTION_SET_NO_RESULTS,
} from '../../components/Hints/hints.actions';

const url =
  'https://secret-ocean-49799.herokuapp.com/https://unsplash.com/nautocomplete/';

export const ACTION_FETCH_HINTS_INIT = (query) => (dispatch) => {
  dispatch(ACTION_HINTS_LOADING());
  axios
    .get(`${url}${query}`)
    .then((result) => {
      const hints = result.data.autocomplete;
      dispatch(ACTION_FETCH_HINTS_SUCCESS(hints));
      dispatch(ACTION_SET_NO_RESULTS(false));
      if (!hints.length) {
        dispatch(ACTION_SET_NO_RESULTS(true));
      }
    })
    .catch(() => {
      dispatch(ACTION_FETCH_HINTS_ERROR());
    });
};
