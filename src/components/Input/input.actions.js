export const INPUT_ACTION_TYPES = {
  SET_INPUT_VALUE: 'SET_INPUT_VALUE',
};

export const SET_INPUT_VALUE = (value) => {
  return { type: INPUT_ACTION_TYPES.SET_INPUT_VALUE, value };
};
