import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'; 
import {Route, Link} from 'react-router-dom'; 
import { AuthRoute } from '../util/route_util';
import ProfilesContainer from './profiles/profiles_container';
import Splash from './splash'; 


const App = () => (
  <div>
    <header>
    </header> 
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/profiles" component={ProfilesContainer} />
    <AuthRoute path="/" component={Splash} /> 
    <GreetingContainer />
  </div> 

);

export default App;

