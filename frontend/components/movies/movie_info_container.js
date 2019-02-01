import { connect } from 'react-redux';
import { fetchMovies } from '../../actions/movie_actions';
import { logout } from '../../actions/session_actions';
import { genreSelector } from '../../reducers/selectors';
import MovieInfo from './movie_info';

const msp = (state) => {
  let movies = Object.values(state.entities.movies);
  return {
    movies: movies,
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchMovies: () => dispatch(fetchMovies())
  };
};

export default connect(msp, mdp)(MovieInfo);