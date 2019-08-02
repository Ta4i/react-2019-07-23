import {combineReducers} from 'redux';
import counter from './counter';

export default combineReducers({
  count: counter
})
