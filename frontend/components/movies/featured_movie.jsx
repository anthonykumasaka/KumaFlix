import React from 'react';
import { Link } from 'react-router-dom';



const FeaturedMovie = props => (
  <div>
    <div className="f-movie-flex-container"> 
      <div className="kuma-flix-original" />
      <div className="f-movie-photo"></div>
      {/* <Link to={`/play/${props.video.id}`} className="f-movie-play-link"> */}
      <Link to='/play/129' className="f-movie-play-link">
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