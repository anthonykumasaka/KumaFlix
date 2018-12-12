import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'; 
import {Route, Link} from 'react-router-dom'; 

const App = () => (
  <div className="background">
  <div className="black"> 
  <div className="sign-in">
    <header>
      <div className="title">
        <h1>Sign In</h1>
      </div>
      <Link to="/" className="header-link">
      </Link>
      <GreetingContainer />
    </header> 
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
  </div> 
  </div>
);

export default App;

