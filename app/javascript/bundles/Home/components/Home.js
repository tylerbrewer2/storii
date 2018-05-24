import PropTypes from 'prop-types';
import React from 'react';

// Components
import NavBar from '../../Shared/components/NavBar';
import HeroBanner from '../../Shared/components/HeroBanner';
import Button from '../../Shared/components/Button';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <HeroBanner
          size="medium"
        >
          <Button classes="is-primary is-inverted is-large is-size-3">
            Get Started
          </Button>
        </HeroBanner>
        <section class="section is-medium">
          <div class="container has-text-centered">
            <span class="is-size-2 is-uppercase is-underlined">
              because design matters
            </span>
          </div>
          <div class="container has-text-centered">
            <span class="is-size-2">
             better visuals, without the price tag
            </span>
          </div>



        <div class="tile is-ancestor medium-spacer">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-primary">
                <p class="title">1. Choose</p>
                <p class="subtitle">Browse our colections and choose the design that best suits your needs.</p>
              </article>
            </div>
          </div>

          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-primary">
                <p class="title">2. Edit</p>
                <p class="subtitle">Make it your own! Easily swap out our text for yours.</p>
              </article>
            </div>
          </div>

          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-primary">
                <p class="title">2. Export</p>
                <p class="subtitle">Export the design to your computer and you are done. Yes, it’s that easy!</p>
              </article>
            </div>
          </div>
        </div>


        </section>
      </div>
    );
  }
}

