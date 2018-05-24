import PropTypes from 'prop-types';
import React from 'react';

const HeroBanner = ({
  size,
  children,
}) => {
  return (
    <section class={`hero is-${size} is-primary is-bold`}>
      <div class="hero-body">
        <div class="container">
          {children}
        </div>
      </div>
    </section>
  )
}

export default HeroBanner;