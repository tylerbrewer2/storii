import React from 'react';

const Button = ({
  classes, // a string of classes that will be applied to the component
  children, // will be the text for the button
}) => {
  return <a class={`button ${classes}`}>{children}</a>
}

export default Button;