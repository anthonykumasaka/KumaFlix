import {connect} from 'react-redux';
import {fetchMovies} from '../../actions/movie_actions'; 
import { fetchListItems } from '../../actions/list_items_actions'; 
import ListItems from './list_items'

const mstp = state => {
  return ({
    movies: state.entities.movies, 
    list_items: Object.values(state.entities.list_items)
  });
}; 

const mdtp = dispatch => {
  return ({
    fetchListItems: () => dispatch(fetchListItems()), 
    fetchMovies: () => dispatch(fetchMovies())
  });
};

export default connect(mstp, mdtp)(ListItems); 