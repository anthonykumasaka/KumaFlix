import React from "react";
import { Link } from "react-router-dom";
const MovieIndexItem = props => (
  <div className="tile">
    <Link to={`/play/${props.movie.id}`}>
    <div className="tile__media">
      <img className="tile__img" src={props.movie.photo} alt="" />
    </div>
      <div className="tile__details">
        <div className="tile__title">
          <h2>{props.movie.title} </h2>
          {props.movie.description}
        </div>
      </div>
    </Link>
  </div>
);

export default MovieIndexItem;