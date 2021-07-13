import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {

  changeGif = (id) => {
    this.props.selectFunction(id)
  }
  render () {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => {
         return <Gif changeFunction = {this.changeGif} id={gif.id} key={gif.id}/>
      })}

      </div>
    );

  }
}

export default GifList;


