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
  const tileTypes = ['field', 'forest', 'pasture', 'mountain', 'hills'];
  const allTiles = tileTypes.map(tileType => [...Array(4).keys()].map((_, i) => tileType)).flat();
  return shuffle(allTiles);
};

export default initTiles;
