import React from 'react';
import { connect } from 'react-redux';
import {
  ACTION_SET_ACTIVE_HINT,
  ACTION_FETCH_HINTS_SUCCESS,
} from '../Hints/hints.actions';
import { ACTION_FETCH_PHOTOS_INIT } from '../../services/photosService/photosService';
import { SET_INPUT_VALUE } from '../Input/input.actions';
import Input from '../Input/input.component';
import Loader from '../Loader/loader.component';
import { useHistory } from 'react-router-dom';
import './index.css';

function Form({
  hints,
  activeHint,
  fetchPhotos,
  isLoading,
  setInputValue,
  clearHints,
  noResults,
  formClass,
  isError,
}) {
  let history = useHistory();

  const handleClick = (e) => {
    fetchPhotos(e.target.getAttribute('query'));
    history.push('/searchResults');
    setInputValue(e.target.getAttribute('query'));
    clearHints();
  };

  const renderHints = () => {
    return hints.map((hint, i) => (
      <div
        key={i}
        query={hint.query}
        onClick={handleClick}
        className={
          hints[activeHint] && hint.query === hints[activeHint].query
            ? 'autocomplete-active'
            : 'autocomplete-items'
        }
      >
        {hint.query}
      </div>
    ));
  };

  return (
    <div className={formClass}>
      <Input />
      {isLoading ? <Loader /> : null}
      <div className="hints-container">
        {isError ? (
          <div className="autocomplete-items">Error, couldn't load hints</div>
        ) : null}
        {noResults ? (
          <div className="autocomplete-items" id="no-hints">
            no hints
          </div>
        ) : (
          renderHints()
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  hints: state.hints.hints,
  activeHint: state.hints.activeHintNumber,
  isLoading: state.hints.isLoading,
  isError: state.hints.isError,
  inputValue: state.input.value,
  photos: state.photos.photos,
  noResults: state.hints.noResults,
});

const mapDispatchToProps = (dispatch) => ({
  actionSetActiveHint: () => dispatch(ACTION_SET_ACTIVE_HINT()),
  fetchPhotos: (query) => dispatch(ACTION_FETCH_PHOTOS_INIT(query)),
  setInputValue: (value) => dispatch(SET_INPUT_VALUE(value)),
  clearHints: () => dispatch(ACTION_FETCH_HINTS_SUCCESS([])),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
