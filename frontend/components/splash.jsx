import React from 'react'; 
import { Link } from 'react-router-dom';

const Splash = () => (

  <div>
    <div className="splash-flex"> 
      <div className="black-overlay-flex-1">
        <div className="netflix"/>
        <div className="login-link-2">
        <Link className="on-link" to='/signup'>Sign In</Link>
        </div> 
      </div>
      <div className="black-overlay-flex-splash">
        <h1>Watch on any device</h1>
        <h2>Stream on your phone, tablet, laptop, and TV <br />  without paying more.</h2>
        <div className="login-link">
          <Link className="on-link" to='/signup'>JOIN FREE FOR A MONTH</Link>
        </div>
      </div>
    </div>
  </div> 
); 

export default Splash; 