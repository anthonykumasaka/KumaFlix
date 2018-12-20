import React from 'react';
import { Link } from 'react-router-dom';


const MovieInfo = props => {

  if (props.id){
    return (
  
     
      // <div style={{backgroundImage: `url(${props.movies[props.id].photo})`}}  className="movie-info">
      
      <div className="info-title">
            <h2>{props.movies[props.id].title}</h2>
             <img src={props.movies[props.id].photo}/>
           
  
            <div className="movie-gradient"></div>
      </div> 
        
 
  ); 
} else {
  return null; 
}
};

export default MovieInfo;