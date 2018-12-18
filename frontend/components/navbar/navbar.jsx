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
            <div className="navbar-link-home">
              <Link to="/movies" className="navbar-link-movies">Home</Link>
              <Link to="/movies" className="navbar-link-movies">My List</Link>
              <Link to="/movies" className="navbar-link-movies">Music Videos</Link>
              <Link to="/movies" className="navbar-link-movies">Performance Videos</Link>
            </div>
            <div> 
     
            </div>
            <div className="profile-drop-flex">
            <ul className="ul-margin">
              <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn"></a>

                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Manage Profiles</a>
                  <a href="#">Sign out of Kumaflix</a>
                </div>
              </li>
            </ul>
            </div>

          </div>
        </div>
      </div>
    ); 
  }
}

export default Navbar;