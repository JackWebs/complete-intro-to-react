import React from 'react';
import PropTypes from 'prop-types';

const MyTitle = props => {
  const style = {color : props.color};
  return (
    <div>
      <h1 style={style}>
        {props.title}
      </h1>
    </div>
  )
};

 MyTitle.propTypes = {
  title : PropTypes.string,
  color : PropTypes.color
}

MyTitle.defaultProps = {
 title : "Default Title",
 color : "red"
}

export default MyTitle;
