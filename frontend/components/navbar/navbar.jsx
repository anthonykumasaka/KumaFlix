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
          <h2>This is the Navbar Component</h2>
                <Link to="/browse" className="navbar-link">
                  <div className="navbar-kumaflix"></div>
                </Link>
          <div className="navbar-flex">
          
              <div className="navbar-link-home"><h2>Home</h2></div>
             <div className="navbar-link-tvshows"><h2>TV Shows</h2></div>
          </div>
        </div>
      
      </div>
    ); 
  }
}

export default Navbar;