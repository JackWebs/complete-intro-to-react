import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard'

const Search = () => (
  <div className="Search">
    <div>
      {preload.shows.map((show) => (
          <ShowCard {...show} key={show.imdbID}/>
        ))}
    </div>
  </div>
);

export default Search;
