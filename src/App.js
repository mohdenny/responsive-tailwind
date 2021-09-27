import React, { Fragment } from 'react';
import './assets/styles/tailwind.css';

const App = () => {
  return (
    <Fragment> 
      <div id="hero" className="bg-red-500 h-screen border">
        <img id="hero-image" className="bg-hero-image bg-no-repeat object-fill h-full border"/>
          Hero
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
