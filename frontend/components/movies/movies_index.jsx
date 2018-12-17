import React from 'react'; 
import Navbar from '../navbar/navbar'; 
import FeaturedMovie from './featured_movie'; 

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout(); 
  }

  componentWillMount() {
    this.props.fetchMovies(); 
  }

  render() { 
    if (this.props.movies.length === 0) return null; 
    const mainMovie = this.props.movies[0];
    return (
      <div className="movies-index-bg">
        <div>
          <div>
            {<Navbar />}
          </div>
          <FeaturedMovie video={mainMovie} />
        </div>
      </div>
    );
  }

}

export default MoviesIndex; 
