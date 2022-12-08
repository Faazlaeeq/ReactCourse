import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
  
    return (
      <div>{props.title}</div>
    )
  
}

// Navbar.propTypes ={
//     title:PropTypes.string.isRequired,

// }

Navbar.defaultProps={
    title:"Set title here",
}