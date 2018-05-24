import PropTypes from 'prop-types';
import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <a className="container has-text-centered" href="https://bulma.io">
         <h1 class='is-size-1'>Storii</h1>
        </a>
      </div>
    </nav>
  )
}

export default Nav;