import { HINTS_ACTION_TYPES } from './hints.actions';

const INITIAL_STATE = {
  hints: [],
  isLoading: false,
  isError: false,
  activeHintNumber: -1,
  noResults: false,
};

const hintsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HINTS_ACTION_TYPES.HINTS_LOADING:
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case HINTS_ACTION_TYPES.FETCH_HINTS_SUCCESS:
      return {
        ...state,
        hints: action.hints,
        isError: false,
        isLoading: false,
      };
    case HINTS_ACTION_TYPES.FETCH_HINTS_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case HINTS_ACTION_TYPES.SET_ACTIVE_HINT:
      return {
        ...state,
        activeHintNumber: action.payload,
      };
    case HINTS_ACTION_TYPES.SET_NO_RESULTS:
      return {
        ...state,
        noResults: action.value,
      };
    default:
      return state;
  }
};

export default hintsReducer;
