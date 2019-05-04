import {combineReducers} from 'redux';
import number from './reducer/number'
import errorText from './reducer/errorText'
import subTypeArray from './reducer/type'
import id from './reducer/id'
import reset from './reducer/reset'

export default combineReducers({
  number,
  errorText,
  subTypeArray,
  id,
  reset,
});