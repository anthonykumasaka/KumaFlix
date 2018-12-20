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
        <div className="kumaflix-logo-profiles"></div>  
        <div className="profiles-bg">
          <div className="profiles-flex">
            <h2 className="profile-title">Who's watching?</h2>

            <div className="prof-flex-container">

            <Link className="add-profile-button" to="/browse"></Link>
            {/* <Link className="add-profile-button-2" to="/browse"></Link> */}
            <button className="logout-btn" onClick={this.props.logout}>MANAGE PROFILES</button>

            </div>


            {/* <h2 className="user-text">Demo</h2> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
