import React from 'react';
import { Link } from 'react-router-dom';

class Profiles extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <div className="netflix2"></div>  
        <div className="profiles-bg">
          <div className="profiles-flex">
            <h2 className="profile-title">Who's watching?</h2>
            <Link className="add-profile-button" to="/browse"></Link>
            <button className="logout-btn" onClick={this.props.logout}>Log Out</button>
          </div>
        </div>

        
      </div>
    );
  }
}

export default Profiles;
