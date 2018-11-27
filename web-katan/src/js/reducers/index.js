import { combineReducers } from 'redux';
import tileReducer from './tileReducer';

export default combineReducers({
    tiles: tileReducer,
});