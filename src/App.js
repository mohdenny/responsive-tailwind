import React, { Fragment } from 'react';
import './assets/styles/tailwind.css';
import img from './assets/images/heros/pattern_hero.png';

const App = () => {
  return (
    <Fragment> 
      <div id="hero" className="bg-red-500 h-full border relative">
        <div id="hero-image" className="bg-hero-image bg-no-repeat bg-cover h-full w-full">
          <div className="grid grid-cols-12 border">
            Spirit Merdeka
          </div>
        </div>
      </div>
      <div id="maincontent" className="container mx-auto">
        <div id="video" className="bg-gray-500 h-96 border"> 
          Video
        </div>
      </div>
    </Fragment>
  );
}

export default App;
