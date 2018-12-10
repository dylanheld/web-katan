import React, { Component } from 'react';
import HexagonTile from './hexagonTile';
import connect from 'react-redux/lib/connect/connect';
import PropTypes from 'prop-types';

function genHexTileAt(x, y, identifier) {
  return <HexagonTile 
    key={identifier.toString()}
    type='pains'
    location={{x, y}}
  />

}
class Gameboard extends Component {
  render() {
    console.log(this.props);
    const tileComponents = [];

    for (let i = 0; i < 3; ++i) {
      tileComponents.push(genHexTileAt(0, 1+i, i));
      tileComponents.push(genHexTileAt(4, 1+i, i));
    }
    for (let i = 0; i < 4; ++i) {
      tileComponents.push(genHexTileAt(1, 0.5+i, i));
      tileComponents.push(genHexTileAt(3, 0.5+i, i));
    }
    for (let i = 0; i < 5; ++i) {
      tileComponents.push(genHexTileAt(2, 0+i, i));
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