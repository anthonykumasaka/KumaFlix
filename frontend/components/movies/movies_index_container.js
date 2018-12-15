import React from 'react'; 
import {connect} from 'react-redux'; 
import MoviesIndex from './movies_index'; 
import {fetchMovies} from '../../actions/movie_actions'; 
import {logout} from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    ownProps
  };
}; 

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(MoviesIndex); 