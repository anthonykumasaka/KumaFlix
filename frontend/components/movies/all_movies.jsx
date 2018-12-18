import React from 'react';
import {Link} from 'react-router-dom';



const AllMovies = (props) => {
  return (
    <div className="row">
      <div className="music-videos"><h1>Featured Videos</h1></div>
      <div className="row__inner">

        <div className="tile">
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/YLTI_glassa_watta_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              YLTI
          </div>
          </div>
        </div>

        <div className="tile">
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/MURSA_black_pearl_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              YLTI
          </div>
          </div>
        </div>
        <div className="tile">
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/TALIBKWELI_outstanding_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              TALIB KWELI
          </div>
          </div>
        </div>
        <div className="tile">
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/AK_reel_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              KUMASAKA REEL
          </div>
          </div>
        </div>
        <div className="tile">
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/WC_genesis_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              WHIPPED CREAM - GENESIS TOUR
          </div>
          </div>
        </div>
        <div className="tile">
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/FABOLOUS_read_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              FABOLOUS ft. KEVIN HART/JESSICA WHITE
          </div>
          </div>
        </div>
        <div className="tile">
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/animation_photos/KOA_trailer_1_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              THE KINGDOM OF AKIO - ORIGINAL TRAILER
          </div>
          </div>
        </div>


      </div> 
    </div>
  );
}; 

export default AllMovies; 