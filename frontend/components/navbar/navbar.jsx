import React from 'react'; 
import {Link} from 'react-router-dom'; 

class Navbar extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (

      <div>
        <div>
                <Link to="/browse" className="navbar-link">
                  <div className="navbar-kumaflix"></div>
                </Link>
          <div className="navbar-flex">
              <div className="navbar-link-home"></div>
              <Link to="/movies" className="navbar-link-movies">Home</Link>
              <Link to="/movies" className="navbar-link-movies">My List</Link>
              <Link to="/movies" className="navbar-link-movies">Music Videos</Link>
              <Link to="/movies" className="navbar-link-movies">Performance Videos</Link>
          <div className="dropdown" />
            <img className="profile-avatar"/>
            <i className="fa fa-caret-down"></i>
          </div>
        </div>
      
      </div>

    ); 
  }
}

export default Navbar;