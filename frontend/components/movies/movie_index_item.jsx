import React from "react";
import { Link } from "react-router-dom";

import MovieInfo from './movie_info'; 

class MovieIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tile">
        <div className="tile__media">
          <img  className="tile__img" src={this.props.movie.photo} alt="" />
        </div>
          <div className="tile__details">
            <div className="tile__title">
              <div className="ow">
              
                <h2 onClick={(e) => (this.props.setDropDown(this.props.movie.id))}>{this.props.movie.title}</h2>

        <Link to={`/play/${this.props.movie.id}`}>
            <div className="down-arrow-play"></div>
        </Link>
              <div onClick={(e) => (this.props.setDropDown(this.props.movie.id))} className="down-arrow-info"></div>
            
                <div>{this.props.movie.description}</div>
              </div>
            </div>
          </div>
   
      </div>

    );
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