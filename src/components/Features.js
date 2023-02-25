import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className='features'>
        <div className='features_content'>
           <div className="title">
             <h1>Enjoy on your TV.</h1>
             <h2>Watch on smart TVs, PlayStation, Xbox, <br /> Chromecast, Apple TV, Blu-ray players and <br /> more.</h2>
           </div>
           <img src="https://thumbs.dreamstime.com/b/rain-netflix-television-screen-popular-series-choice-movies-netflix-internet-television-popular-tv-series-menu-154712930.jpg" alt="" />
        </div>
        <div className='features_content'>
           <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
           <div className="title">
             <h1>Download your shows<br/>to watch offline.</h1>
             <h2>Save your favourites easily and always have <br /> something to watch.</h2>
           </div>
        </div>
        <div className='features_content'>
           <div className="title">
             <h1>Watch everywhere.</h1>
             <h2>Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</h2>
           </div>
           <img src="https://images.ctfassets.net/4cd45et68cgf/5y7i4snzpqkr2oHRCRAkN4/c144749aa0df745e43367744af149f66/Android_Collage_1920x1080__UCAN_En.jpg" alt="" />
        </div>
        <div className='features_content'>
           <img src="https://occ-0-2366-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" alt="" />
           <div className="title">
             <h1>Create profiles for <br /> children.</h1>
             <h2>Send children on adventures with their <br /> favourite characters in a space made just for <br /> them—free with your membership.</h2>
           </div>
        </div>
       </div>
  )
}

export default Features