import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';


const App = () => (
  <HashRouter>
    <div className="app">
    <Route exact path="/" component={Landing} />
    <Route exact path="/search" component={Search} />
    </div>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
