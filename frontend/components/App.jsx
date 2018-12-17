import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'; 
import {Route, Switch, HashRouter} from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfilesContainer from './profiles/profiles_container';
import MoviesIndexContainer from './movies/movies_index_container';
import PlayMovieContainer from './movies/play_movie_container'; 
import Splash from './splash'; 
import {Provider} from 'react-redux'; 




const App = ({store}) => (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <ProtectedRoute path="/play/:movieId" component={PlayMovieContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <ProtectedRoute path="/profiles" component={ProfilesContainer} />
          <ProtectedRoute path="/browse" component={MoviesIndexContainer} />
          <AuthRoute path="/" component={Splash} /> 
        </Switch>
      </HashRouter>
    </Provider>
);

export default App;


