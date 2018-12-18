import React from 'react';
import {Link} from 'react-router-dom';



const AllMovies = (props) => {
  return (
    <div className="row">
      <div className="featured-videos"><h1>Featured Videos</h1></div>
      <div className="row__inner">

        <div className="tile">
          <Link to={`/play/9`}>
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/YLTI_glassa_watta_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              YLTI
          </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
        <Link to={`/play/2`}>
          <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/MURSA_black_pearl_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              MURSA
          </div>
          </div>
         </Link>
        </div>

        <div className="tile">
          <Link to={`/play/7`}>
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/TALIBKWELI_outstanding_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              TALIB KWELI ft RYAN LESLIE - OUTSTANDING
          </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
          <Link to={`/play/3`}>
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/AK_reel_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              KUMASAKA REEL
          </div>
          </div>
          </Link>
        </div>

        <div className="tile">
        <Link to={`/play/21`}>
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/WC_genesis_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              WHIPPED CREAM - GENESIS TOUR
          </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
          <Link to={`/play/4`}>
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/FABOLOUS_read_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              FABOLOUS ft. KEVIN HART/JESSICA WHITE
          </div>
          </div>
          </Link>
        </div>
        
        <div className="tile">
          <Link to={`/play/23`}>
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/animation_photos/KOA_trailer_1_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              THE KINGDOM OF AKIO - ORIGINAL TRAILER
            </div>
          </div>
          </Link>
        </div>

      {/* Performance Videoes: */}
      <div className="music-videos"><h1>Performance Videos</h1></div>
        <div className="index-spacing">

        <div className="tile">
          <Link to={`/play/13`}>
          <div className="tile__media">
            <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/HUCCI_spring_awakening_photo.png"/>
          </div>
          <div className="tile__details">
            <div className="tile__title">
              HUCCI - LIVE AT SPRING AWAKENING FESTIVAL
          </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
            <Link to={`/play/12`}>
          <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_joan_of_arc_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              RYAN LESLIE - JOAN OF ARC (LIVE)
            </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
            <Link to={`/play/17`}>
          <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_irving_plaza_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              RYAN LESLIE - CARNIVAL OF VENICE (IRVING PLAZA)
          </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
          <Link to={`/play/15`}>
          <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_black_flag_performance_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              RYAN LESLIE - BLACK FLAG (LIVE)
            </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
          <Link to={`/play/21`}>
          <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/WC_genesis_tour_2_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
            WHIPPED CREAM - GENESIS TOUR (2018)
          </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
          <Link to={`/play/18`}>
          <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_sizzle_reel_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              RYAN LESLIE - SIZZLE REEL (2014)
            </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
          <Link to={`/play/20`}>
          <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/TK_outstanding_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              TALIB KWELI ft RYAN LESLIE - OUTSTANDING
            </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
          <Link to={`/play/19`}>
          <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/RLES_tour_promo_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              RYAN LESLIE - BLACK MOZART TOUR PROMO (2014)
            </div>
          </div>
          </Link> 
        </div>

        <div className="tile">
          <Link to={`/play/14`}>
          <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/performance_video_photos/JC_rotterdam_photo.png" alt="" />
          </div>
          <div className="tile__details">
            <div className="tile__title">
              JORDAN COMOLLI - LIVE IN ROTTERDAM
            </div>
          </div>
          </Link> 
        </div>
      
        </div>

        
        <div className="music-videos"><h1>Animation Videos</h1></div>
        <div className="index-spacing">

          <div className="tile">
          <Link to={`/play/23`}>
            <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-1.amazonaws.com/kumaflix-movies/Photos/animation_photos/KOA_trailer_1_photo.png" />
            </div>
            <div className="tile__details">
              <div className="tile__title">
                THE KINGDOM OF AKIO - TRAILER 1 (2013)
            </div>
            </div>
            </Link> 
          </div>

          </div> 
      
      </div>
    </div>
  );
}; 

export default AllMovies; 