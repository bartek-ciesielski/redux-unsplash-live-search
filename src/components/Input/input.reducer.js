import { INPUT_ACTION_TYPES } from './input.actions';

const initialState = {
  value: '',
};

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_ACTION_TYPES.SET_INPUT_VALUE:
      return (state = {
        ...state,
        value: action.value,
      });

    default:
      return state;
  }
};

export default inputReducer;
