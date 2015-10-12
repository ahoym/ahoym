require('../sass/app.scss');

import React from 'react';
import scrollHook from 'simple-scroll-hook';

import Hero from './content/hero';
import AboutMe from './content/about-me';
import Experience from './content/experience';
import DeepDive from './content/deep-dive';
import Tech from './content/tech';


export default class App extends React.Component {
  componentDidMount() {
    scrollHook.start();
  }

  render() {
    return (
      <div>
        <Hero />
        <AboutMe />
        <section className='dive'></section>
        <Experience />
        <DeepDive />
        <Tech />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
