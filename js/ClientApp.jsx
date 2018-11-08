import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

const MyFirstComponent = () => (
    <div>
      <MyTitle title="House of Cards" color="rebeccapurple"/>
      <MyTitle title="Orange is the New Black" color="mediumaquamarine"/>
      <MyTitle title="Stranger Things" color="peru"/>
      <MyTitle/>
  </div>
  );

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'));
