import React from 'react';
import { Link } from 'react-router-dom';


const FeaturedMovie = props => (
  <div>
    <div className="f-movie"> 
      <div className="kuma-flix-original" />
      <div className="f-movie-photo"></div>
      <Link to={`/play/${props.video.id}`} className="f-movie-play-link">
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
    <div>
    </div>
      <video width="320" height="240" controls>
        <source src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/RLES_black_flag_music_video.mp4"/>
            Your browser does not support the video tag.
      </video> 
  </div> 
);

export default FeaturedMovie;