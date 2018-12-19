import React from 'react'; 
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    debugger
    return (

      <div>
        <div className="scroll-down">
          <Link to="/browse" className="navbar-link">
          <div className="navbar-kumaflix"></div>
          </Link>
          <div className="navbar-flex">
            <div className="navbar-link-home">
              <Link to="/browse" className="navbar-link-movies">Home</Link>
              <Link to="/movies" className="navbar-link-movies">My List</Link>
              <Link to="/movies" className="navbar-link-movies">Music Videos</Link>
              <Link to="/movies" className="navbar-link-movies">Performance Videos</Link>
              <div className='header-overlay'></div>
            </div>


          <div>
            <div className="profile-drop-flex">
              <div>
                <form id="demo-2">
                  <input type="search" placeholder="Search"/>
                </form> 
              </div>

              <div>
                <ul className="ul-margin">
                  <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn"></a>
                    <div className="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Manage Profiles</a>
                      <a href="#">Sign out of Kumaflix</a>
                      <button className="logout-btn" onClick={this.props.logout}>Log Out</button>
                          
                    </div>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    ); 
  }
}

export default Navbar;