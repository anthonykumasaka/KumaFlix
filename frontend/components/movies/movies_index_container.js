import {connect} from 'react-redux'; 
import MoviesIndex from './movies_index'; 
import {fetchMovies} from '../../actions/movie_actions'; 
import {logout} from '../../actions/session_actions';

const msp = (state) => {
  debugger 
  let movies = Object.values(state.entities.movies); 
  return {
    movies: movies 
  };
}; 

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()), 
    fetchMovies: () => dispatch(fetchMovies())
  };
};

export default connect(msp, mdp)(MoviesIndex); 