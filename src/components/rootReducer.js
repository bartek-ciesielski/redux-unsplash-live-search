import { combineReducers } from 'redux';
import input from '../components/Input/input.reducer';
import hints from './Hints/hints.reducer';
import photos from './Photos/photos.reducer';

export default combineReducers({
  input: input,
  hints: hints,
  photos: photos,
});
