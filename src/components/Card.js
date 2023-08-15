import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className === undefined ? '' : props.className;
  return (
    <div id={props.id} className={classes}>{props.children}</div>
  )
}

export default Card;