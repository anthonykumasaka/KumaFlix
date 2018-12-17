import { connect } from 'react-redux';
import MovieShow from './movie_show';
import { fetchMovie } from '../../actions/movie_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return ({
    movie: state.entities.movies[ownProps.match.params.movieId]
  });
}; 

const mapDispatchToProps = dispatch => {
  return ({
    fetchMovie: (id) => dispatch(fetchMovie(id))
  });
}; 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieShow));