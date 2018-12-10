import React, { Component } from 'react';
import hexagonImg from '../../data/hexagon.png'

export default class HexagonTile extends Component {
  render() {
    // const className = `hexagon ${this.props.type}`;
    const imgStyle = {
      position: 'fixed',
      top: `${this.props.location.y*13}rem`,
      left: `${this.props.location.x*11}rem`,
    };

    return (
      <div style={imgStyle}>
        <img src={hexagonImg} />
      </div>
    );
  }
};