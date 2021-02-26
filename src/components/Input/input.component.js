import React, { useCallback } from 'react';
import { SET_INPUT_VALUE } from './input.actions';
import { ACTION_FETCH_HINTS_INIT } from '../../services/hintsService/hintsService';
import { connect } from 'react-redux';
import {
  ACTION_SET_ACTIVE_HINT,
  ACTION_FETCH_HINTS_SUCCESS,
  ACTION_SET_NO_RESULTS,
} from '../Hints/hints.actions';
import { ACTION_FETCH_PHOTOS_INIT } from '../../services/photosService/photosService';
import './index.css';
import { useHistory } from 'react-router-dom';

const Input = ({
  value,
  setInputValue,
  fetchHints,
  hints,
  activeHint,
  actionSetActiveHint,
  fetchPhotos,
  clearHints,
  setNoResults,
}) => {
  const handleSetValue = useCallback((e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    if (e.target.value.length > 2) {
      fetchHints(e.target.value);
    } else {
      setNoResults(false);
      clearHints();
    }
  }, []);

  let history = useHistory();

  const handleActive = (e) => {
    if (e.keyCode === 40) {
      if (activeHint < hints.length - 1) {
        return actionSetActiveHint(activeHint + 1);
      }
    }
    if (e.keyCode === 38) {
      if (activeHint > 0) {
        return actionSetActiveHint(activeHint - 1);
      }
    }
    if (e.keyCode === 13) {
      e.preventDefault();
      if (activeHint >= 0 && hints[activeHint]) {
        fetchPhotos(hints[activeHint].query);
        setInputValue(hints[activeHint].query);
        clearHints();
        history.push('/searchResults');
      } else {
        fetchPhotos(e.target.value);
        history.push('/searchResults');
        setInputValue(e.target.value);
        clearHints();
      }
    }
  };

  return (
    <input
      id="myInput"
      type="text"
      value={value}
      onChange={handleSetValue}
      onKeyDown={handleActive}
      placeholder="Start searching images"
    />
  );
};

const mapStateToProps = (state) => ({
  value: state.input.value,
  hints: state.hints.hints,
  activeHint: state.hints.activeHintNumber,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: (query) => dispatch(ACTION_FETCH_PHOTOS_INIT(query)),
  actionSetActiveHint: (value) => dispatch(ACTION_SET_ACTIVE_HINT(value)),
  setInputValue: (value) => dispatch(SET_INPUT_VALUE(value)),
  fetchHints: (value) => dispatch(ACTION_FETCH_HINTS_INIT(value)),
  clearHints: () => {
    dispatch(ACTION_FETCH_HINTS_SUCCESS([]));
    dispatch(ACTION_SET_ACTIVE_HINT(-1));
  },
  setNoResults: (value) => dispatch(ACTION_SET_NO_RESULTS(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
