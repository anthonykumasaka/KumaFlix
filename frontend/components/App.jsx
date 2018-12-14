import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'; 
import {Route, Switch, HashRouter} from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfilesContainer from './profiles/profiles_container';
import Splash from './splash'; 
import {Provider} from 'react-redux'; 




const App = ({store}) => (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <ProtectedRoute path="/profiles" component={ProfilesContainer} />
          <AuthRoute path="/" component={Splash} /> 
        </Switch>
      </HashRouter>
    </Provider>
);

export default App;


