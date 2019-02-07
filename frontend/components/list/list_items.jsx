import React from 'react';
// import FilteredItem from '../browse/filtered_item_container';

class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list_items: []
    };
  }

  componentWillMount() {
    this.props.fetchMovies()
    .then(
      () => this.props.fetchListItems()
    );
  }

  componentWillReceiveProps(newState){
    const indices = newState.list_items.map(item => item.movie_id);
    const filtered = indices.map(i => newState.movies[i]
    );
    // debugger
    this.setState({
      list_items: filtered
    });
  }

  render() {
    if (this.props.movies === undefined) {
      return (
        <div>
          rerender
        </div>
      );
    }

    const filtered = this.state.list_items.map(movie => {

      return (
        // <div key={movie.id} className="filtered-movie-container">
         
          // <FilteredItem key={movie.id} movie={movie}/>
        // </div>
        <h1>YO</h1>
      )}
    );
    if(this.state.list_items.length === 0){
      return(
        <div className="list-container">
          <div className="list-header">
            My List
          </div>
          <div className="empty-msg">
            You haven't added any titles to your list yet.
          </div>
        </div>
      );
    } else {
      return (
        <div className="list-container">
          <div className="list-header">
            My List
          </div>
          <div className="search-results-container for-list">
            {filtered}
          </div>
        </div>
      );
    }
  }
}

export default ListItems;