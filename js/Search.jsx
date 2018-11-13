import React, { Component } from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard'

class Search extends Component {
  constructor(props) {
      super(props);
      this.state = {
        searchTerm: 'this is still a debug statement'
      };
      this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }
    handleSearchTermChange (event) {
      this.setState({ searchTerm: event.target.value })
    }
  render(){
    return (
      <div className="Search">
        <header>
          <h1>Search: {this.state.searchTerm}</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type='text'
            placeholder='Search' />
        </header>
        <div>
          {preload.shows.map(show => <ShowCard {...show} key={show.imdbID} {...show}/>)}
        </div>
      </div>
    );
  }
}

export default Search;
