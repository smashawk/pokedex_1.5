import {combineReducers} from 'redux';
import count from './reducer/count'
import message from './reducer/message'

export default combineReducers({
  count,
  message,
});