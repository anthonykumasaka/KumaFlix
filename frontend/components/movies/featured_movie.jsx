import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedMovie = props => (
  <div>
    <div className="f-movie-flex-container"> 
      <div className="kuma-flix-original" />
      <div className="f-movie-photo"></div>
      {/* <video src='https://s3-us-west-1.amazonaws.com/kumaflix-movies/Assets/YLTI_GIF_5.mp4' autoPlay="autoPlay" controls /> */}
      {/* <video src='https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/YLTI_glassa_wata_trailer_video.mov' autoPlay="autoPlay" controls /> */}
      <Link to='/play/58' className="f-movie-play-link">
        <div className='font-play'>
          Play
        </div>
      </Link>
      <Link to="/profiles" className="my-list-btn">
        <div className='font-play'>
          My List
        </div>
      </Link>
    </div>
  </div> 
);

export default FeaturedMovie;