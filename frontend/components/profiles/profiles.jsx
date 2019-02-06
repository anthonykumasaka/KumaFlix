import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar'; 

class Profiles extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        {/* <div className="kumaflix-logo-profiles"></div>   */}
        <div className="profiles-bg">
          <div className="profiles-flex">
            <h2 className="profile-title">Who's watching?</h2>

            <div className="prof-flex-container">

            <Link className="add-profile-button" to="/browse"></Link>
            {/* <Link className="add-profile-button-2" to="/browse"></Link> */}
            {/* <button className="logout-btn" onClick={this.props.logout}>MANAGE PROFILES</button> */}
         
              <h1 className="demo-login">DEMO</h1>
           
            </div>
            <Link to="/browse">
              <button className="profiles-login-btn">BROWSE VIDEOS</button>
            </Link>

          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
