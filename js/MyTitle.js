import React from 'react';

const ce = React.createElement;

const MyTitle = function MyTitle(props) {
  return (
    ce('div', null,
      ce('h1', {style : {color : props.color}}, props.title)
    )
  );
};

export default MyTitle;
