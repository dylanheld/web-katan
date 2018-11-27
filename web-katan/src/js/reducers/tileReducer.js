// import { FETCH_POSTS } from '../actions/types';
import initTiles from '../utils/initTiles.js';

const initialState = {
  tiles: initTiles(),
};

export default function(state = initialState, action) {
  switch(action.type) {
    // case FETCH_POSTS:
    //   return {
    //     ...state,
    //     items: action.payload,
    //   }
    default:
      return state;
  }
}