import React from 'react';
import MovieItem from "../movies/movie_index_item";
import NavbarContainer from "../navbar/navbar_container"; 

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mid: null,
      pid: null,
      aid: null,
      xid: null
    }; 
  }

  setDropDown(id) {
    let that = this;
    return (movieId) => {
      that.setState({
        mid: null,
        pid: null,
        aid: null,
        xid: null
      });
      that.setState({
        [id]: movieId
      });
    };
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  getQueryString() {
    return this.props.history.location.search.split("=")[1];
  }

  getMovies() {
    const movies = this.props.movies.map((movie) => {
      let lowerCaseTitle = (movie.title).toLowerCase();
      let lowerCaseGenre = (movie.genre).toLowerCase();
      if (lowerCaseTitle.includes(this.getQueryString().toLowerCase()) ||
        lowerCaseGenre.includes(this.getQueryString().toLowerCase())) {
        return (<MovieItem
          key={movie.title}
          movie={movie}
        />
        )
      }
    })
    return movies;
  }

  render() {

    if (this.props.movies.length === 0) return null;

    return <div>
      <div>
        {<NavbarContainer />}
      </div>
      <div className="movie-search-results">
        <div className="row__inner_search ">
        {/* <div className="row"> */}
        {/* <div className="row_inner"> */}
          {this.getMovies()}
        </div>
      </div>
    </div>;
  }
}

export default Search;

