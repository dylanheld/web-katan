import React, { Component } from 'react';
import HexagonTile from './hexagonTile';
import connect from 'react-redux/lib/connect/connect';
import PropTypes from 'prop-types';

class Gameboard extends Component {
  render() {
    console.log(this.props);
    const tileComponents =  [...this.props.tiles.keys()].map((i, tile) =>
      <HexagonTile key={i.toString()} />
    );
    return (
      <div className="hexagon">
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