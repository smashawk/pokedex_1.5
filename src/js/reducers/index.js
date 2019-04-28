import {combineReducers} from 'redux';
import count from './reducer/count'
import message from './reducer/message'
import number from './reducer/number'
import errorText from './reducer/errorText'

export default combineReducers({
  count,
  message,
  number,
  errorText,
});