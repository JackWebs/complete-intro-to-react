import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>vidflix</h1>
      <input type="text" placeholder="Search" />
      <a> or Browse </a>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
