import { TILE_TYPES } from './constants'

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const initTiles = () => {
  const tiles = [
    [...Array(4).keys()].map(i => TILE_TYPES.PASTURE),
    [...Array(4).keys()].map(i => TILE_TYPES.FIELD),
    [...Array(4).keys()].map(i => TILE_TYPES.FOREST),
    [...Array(3).keys()].map(i => TILE_TYPES.MOUNTAIN),
    [...Array(3).keys()].map(i => TILE_TYPES.HILLS),
    TILE_TYPES.DESERT,
  ].flat();
  return shuffle(tiles);
};

export default initTiles;
