import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "cOzyUgoJljvhut2G0E"
    };

    this.search("homer thinking");

  }

  select = (id) => {
    this.setState({
      selectedGifId : id
    })
  };

  search = (query) => {
    giphy('A3V75NFBkNhb8HlqeJLJSCAmwiF7Yp3s').search({
      q: query,
      rating: 'g',
      limit : 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });

    });
  }
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction = {this.search}/>
          <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList selectFunction = {this.select} gifs={this.state.gifs}/>
        </div>
      </div>
    )
  }
}

export default App;