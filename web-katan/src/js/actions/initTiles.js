// import { INIT_TILES } from './types';

// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

// export default initTiles = () => dispatch => {
//     const tileTypes = ['field', 'forest', 'pasture', 'mountain', 'hills'];
//     const allTiles = tileTypes.map(tileType => [...Array(4).keys()].map((_, i) => tileType)).flat();
//     allTiles = shuffle(allTiles);
//     return dispatch({
//         type: INIT_TILES,
//         payload: allTiles,
//     });
// };


