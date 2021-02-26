export const HINTS_ACTION_TYPES = {
  HINTS_LOADING: 'HINTS_LOADING',
  FETCH_HINTS_SUCCESS: 'FETCH_HINTS_SUCCESS',
  FETCH_HINTS_ERROR: 'FETCH_HINTS_ERROR',
  SET_ACTIVE_HINT: 'SET_ACTIVE_HINT',
  SET_NO_RESULTS: 'SET_NO_RESULTS',
};

export const ACTION_HINTS_LOADING = () => {
  return {
    type: HINTS_ACTION_TYPES.HINTS_LOADING,
  };
};

export const ACTION_FETCH_HINTS_SUCCESS = (hints) => {
  return {
    type: HINTS_ACTION_TYPES.FETCH_HINTS_SUCCESS,
    hints: hints,
  };
};

export const ACTION_FETCH_HINTS_ERROR = () => {
  return {
    type: HINTS_ACTION_TYPES.FETCH_HINTS_ERROR,
  };
};

export const ACTION_SET_ACTIVE_HINT = (activeHintNumber) => {
  return {
    type: HINTS_ACTION_TYPES.SET_ACTIVE_HINT,
    payload: activeHintNumber,
  };
};

export const ACTION_SET_NO_RESULTS = (value) => {
  return {
    type: HINTS_ACTION_TYPES.SET_NO_RESULTS,
    value: value,
  };
};
