import React, { Component } from 'react';
import hexagonImg from '../../data/hexagon.png'
import { TILE_TYPES } from '../utils/constants'

export default class HexagonTile extends Component {
  render() {
    // const className = `hexagon ${this.props.type}`;
    const imgStyle = {
      position: 'fixed',
      top: `${this.props.location.y*13}rem`,
      left: `${this.props.location.x*11}rem`,
    };

    switch (this.props.type) {
      case TILE_TYPES.FIELD:
        imgStyle.filter = 'grayscale(100%)';
        break;
      case TILE_TYPES.FOREST:
        imgStyle.filter = 'grayscale(80%)';
        break;
      case TILE_TYPES.PASTURE:
        imgStyle.filter = 'grayscale(60%)';
        break;
      case TILE_TYPES.MOUNTAIN:
        imgStyle.filter = 'grayscale(40%)';
        break;
      case TILE_TYPES.HILLS:
        imgStyle.filter = 'grayscale(20%)';
        break;
      case TILE_TYPES.DESERT:
        imgStyle.filter = 'grayscale(0%)';
        break;
      default:
        console.log('unexpected');
        break;
    }

    return (
      <div style={imgStyle}>
        <img src={hexagonImg} />
      </div>
    );
  }
};