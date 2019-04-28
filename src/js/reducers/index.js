import {combineReducers} from 'redux';
import number from './reducer/number'
import errorText from './reducer/errorText'

export default combineReducers({
  number,
  errorText,
});