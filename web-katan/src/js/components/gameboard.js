import React, { Component } from 'react';
import HexagonTile from './hexagonTile';
import connect from 'react-redux/lib/connect/connect';
import PropTypes from 'prop-types';

function genHexTileAt(x, y, tile) {
  const key = `hextile-${x}-${y}`;

  return <HexagonTile
    key={key}
    type={tile}
    location={{x, y}}
  />
}

class Gameboard extends Component {
  render() {
    console.log(this.props);
    const tileComponents = [];

    let j = 0;
    for (let i = 0; i < 3; ++i) {
      tileComponents.push(genHexTileAt(0, 1+i, this.props.tiles[j]));
      ++j;
      tileComponents.push(genHexTileAt(4, 1+i, this.props.tiles[j]));
      ++j;
    }
    for (let i = 0; i < 4; ++i) {
      tileComponents.push(genHexTileAt(1, 0.5+i, this.props.tiles[j]));
      ++j;
      tileComponents.push(genHexTileAt(3, 0.5+i, this.props.tiles[j]));
      ++j;
    }
    for (let i = 0; i < 5; ++i) {
      tileComponents.push(genHexTileAt(2, 0+i, this.props.tiles[j]));
      ++j;
    }
    return (
      <div>
        {tileComponents}
      </div>
    );
  }
};

Gameboard.propTypes = {
  // initTiles: PropTypes.func.isRequired,
  tiles: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  tiles: state.tiles.tiles
});

export default connect(mapStateToProps, {})(Gameboard);  //{initTiles}, App);