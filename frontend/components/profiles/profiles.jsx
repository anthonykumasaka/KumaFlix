

import React from 'react';

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
            <button className="add-profile-button"></button>
          </div>
        </div>

        
      </div>
    );
  }
}

export default Profiles;
