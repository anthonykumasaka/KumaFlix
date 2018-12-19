import React from 'react';
import { Link } from 'react-router-dom';


const MovieInfo = props => {

  if (props.movie === undefined){
    return null; 
  } else if (props.movie.title) {
    return (
    <div>
        <div>
          <img src={props.movie.photo} height="420" width="100%"></img>
        </div>
  </div>
  ); 
} else {
  return null; 
}
};

export default MovieInfo;