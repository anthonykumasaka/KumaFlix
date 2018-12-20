import React from 'react';
import { Link } from 'react-router-dom';


const MovieInfo = props => {

  if (props.id){
    return (
    <div>
  
      <div>
            {/* <div className="info-title"><h2>{props.movies[props.id].title}</h2></div> */}
          <div className="movie-info">
            <img src={props.movies[props.id].photo} height="" width=""></img>
    
            <div className="movie-gradient"></div>
        </div>
      </div>
      
  </div>
  ); 
} else {
  return null; 
}
};

export default MovieInfo;