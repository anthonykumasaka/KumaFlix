import React from 'react'; 
import NavbarContainer from '../navbar/navbar_container'; 
import FeaturedMovie from './featured_movie'; 
import AllMovies from './all_movies'; 
import { genreSelector } from '../../reducers/selectors';

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
    const movies = Object.values(this.props.movies); 

    if (movies.length === 0) return null; 
    const mainMovie = movies[0];
    
    return (
      <div className="movies-index-bg">
        <div>
          <div>
            {<NavbarContainer />}
          </div>
          
          <FeaturedMovie video={mainMovie} /> 
          <AllMovies 
          performanceVideos={genreSelector(movies, 'performance')}
          musicVideos={genreSelector(movies, 'Music Video')}
          animationVideos={genreSelector(movies, 'animation')}
          miscellaneousVideos={genreSelector(movies, 'Miscellaneous')}
          movies={this.props.movies} />
        </div>
      </div>
    );
  }
}

export default MoviesIndex; 
