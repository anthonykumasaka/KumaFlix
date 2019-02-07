import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container'; 
import {Route, Switch, HashRouter} from 'react-router-dom'; 
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import ProfilesContainer from './profiles/profiles_container';
import MoviesIndexContainer from './movies/movies_index_container';
import PlayMovieContainer from './movies/play_movie_container'; 
import Splash from './splash'; 
import {Provider} from 'react-redux';
import SearchBarContainer from './search/search_bar_container'; 
// import SearchResultsContainer from './search/search_results_container'; 
import SearchResultsContainer from "./search/search_results_container"; 
import NavbarContainer from "./navbar/navbar_container"; 
import ListContainer from './list/list_container'; 

const App = ({store}) => (
    <Provider store={store}>
      <HashRouter>
        <div>
        {/* <SearchBarContainer /> */}

        <NavbarContainer /> 
        <Switch>
          {/* <AuthRoute exact path="/" component={NavbarContainer} /> */}
          {/* <ProtectedRoute exact path='/search' component={SearchResultsContainer} />  */}
          <ProtectedRoute exact path="/search" component={SearchResultsContainer} />
          <ProtectedRoute path="/play/:movieId" component={PlayMovieContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <ProtectedRoute path="/list" component={ListContainer} />

          <ProtectedRoute path="/browse" component={MoviesIndexContainer} />
          <ProtectedRoute path="/profiles" component={ProfilesContainer} />
          <AuthRoute path="/" component={Splash} /> 
          {/* <ProtectedRoute exact path="/list" component={ListContainer} /> */}
        </Switch>
      </div>
      </HashRouter>
    </Provider>
);

export default App;


