import React from "react";
import { Link } from "react-router-dom";

import MovieInfo from './movie_info'; 

class MovieIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.movie.title === "") {
      return (
        <div className="tile">
          <div className="tile__media">
            <img className="tile__img" src={this.props.movie.photo} alt="" />
          </div>
          <Link to={`/play/${this.props.movie.id}`}>
            <div className="tile__details">
              <div className="tile__title">
                <div className="ow">
                  <h2>{this.props.movie.title}</h2>
                  <div>{this.props.movie.description}</div>
                  <div className="info-poster">
                    <img src={this.props.movie.photo} alt="Smiley face" height="420" width="100%"></img>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    } else {
    return (
      // <div className="flex-container-movies">
      <div className="tile">
        <div className="tile__media">
          <img className="tile__img" src={this.props.movie.photo} alt="" />
        </div>
        <Link to={`/play/${this.props.movie.id}`}>
          <div className="tile__details">
            <div className="tile__title">
              <div className="ow">
                <h2>{this.props.movie.title}</h2>
                <div>{this.props.movie.description}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
        // <div>
        //   <MovieInfo movie={this.props.movie} />
        // </div>
    // </div >
    );
  }
}
}

// const MovieIndexItem = props => (
//   <div className="tile">
//     <div className="tile__media">
//       <img className="tile__img" src={props.movie.photo} alt="" />
//     </div>
//           <Link to={`/play/${props.movie.id}`}>
//       <div className="tile__details">
//         <div className="tile__title">
//           <div className="ow"> 
//             <h2>{props.movie.title}</h2>
//             <div>{props.movie.description}</div>
            
//           </div> 
//         </div>
//       </div>
//     </Link>

//   </div>
// );
export default MovieIndexItem;