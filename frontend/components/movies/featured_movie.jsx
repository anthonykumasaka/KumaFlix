import React from 'react';

const FeaturedMovie = props => (
  <div>
    <div className="f-movie"> 
      <div className="kuma-flix-original" />
      <div className="f-movie-photo" />
      <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4" />
        <source src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Music_Videos/RLES_black_flag_music_video.mp4" type="video/ogg" />
            Your browser does not support the video tag.
      </video> 
    </div>
  </div>
);

export default FeaturedMovie;