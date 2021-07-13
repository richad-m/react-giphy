import React, { Component } from 'react';
import GifList from './gif_list';

class Gif extends Component {

  handleClick = () => {
    this.props.changeFunction(this.props.id);
  }
  render () {
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`
    return (
        <img onClick = {this.handleClick} className= "gif" src={src} alt="" />
      )
  }
}

export default Gif;


