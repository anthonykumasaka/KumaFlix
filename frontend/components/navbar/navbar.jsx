import React from 'react'; 
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
   
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
            {/* magnifyglass code from codepen */}
            <div className="profile-drop-flex">
              <div className="search-bar-pos">
                <form onSubmit={this.filter} id="demo-2">
                  <input type="search" placeholder="Search"/>
                </form> 
              </div>
              <div>
                <div>
                  <ul>
                    <li className="dropdown">
                      <a href="javascript:void(0)" className="dropbtn"></a>
              
                     <div className="ul-margin">
                      <div className="dropdown-content">
    
                      <a href="#">Manage Profiles</a>
                      <a onClick={this.props.logout}>Sign out of Kumaflix</a>
                    </div>    
                    </div>
                  </li>
                </ul>
                  </div>
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