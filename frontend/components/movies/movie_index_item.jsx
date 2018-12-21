import React from "react";
import { Link } from "react-router-dom";

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
              <Link to={`/play/${this.props.movie.id}`}>
                <div className="down-arrow-play"></div>
              </Link>
              <div className="add_list"></div>
              {/* <i class="fa fa-caret-down"></i> */}
              <i onClick={(e) => (this.props.setDropDown(this.props.movie.id))} class="fa fa-angle-down" aria-hidden="true"></i>
              {/* <div onClick={(e) => (this.props.setDropDown(this.props.movie.id))} className="down-arrow-info"></div> */}
              <h2 onClick={(e) => (this.props.setDropDown(this.props.movie.id))}>{this.props.movie.title}</h2>
              <div onClick={(e) => (this.props.setDropDown(this.props.movie.id))}>{this.props.movie.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieIndexItem;