import React from 'react'; 
import {Link} from 'react-router-dom';
import SearchBarContainer from '../search/search_bar_container'; 

class Navbar extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    if (this.props.currentUser === undefined) {
      return null;
    }
    return (
      <div>
        <div className="scroll-down">
          <Link to="/browse" className="navbar-link">
          <div className="navbar-kumaflix"></div>
          </Link>
          <div className="navbar-flex">
            <div className="navbar-link-home">
              {/* <a href="animation">Click here to see the content below.</a> */}
              <Link to="/browse" className="navbar-link-movies">Home</Link>
              {/* <a href="#portfolio">Projects</a> */}
              {/* <Link to="/browse" className="navbar-link-movies">My List</Link> */}
              <Link to="/browse" className="navbar-link-movies">Music Videos</Link>
              <Link to="/browse" className="navbar-link-movies">Performance Videos</Link>
              <Link to="/browse" className="navbar-link-movies">Animation Videos</Link>
              <div className='header-overlay'></div>
            </div>

          <div>
            {/* magnifyglass code from codepen */}
            <div className="profile-drop-flex">
              <div className="search-bar-pos">
                  <SearchBarContainer />
                {/* <form id="demo-2">
                  
                  <input type="search" placeholder="Title, Genre"/>
                </form>  */}
              </div>
              <div>
                <div>
                  <ul>
                    <li className="dropdown">
                      <a href="javascript:void(0)" className="dropbtn"></a>
                      <div className="carrot-down"></div>
                      <div className="carrot-down-hidden"></div>
                      <div className="ul-margin">
                        <div className="dropdown-content">
                          <a href="#/profiles">Manage Profiles</a>
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