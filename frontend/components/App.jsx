import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'; 
import {Route, Link} from 'react-router-dom'; 

const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
      <h1>DR Kumasaka</h1>
      </Link>
      <GreetingContainer />
    </header> 
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;

