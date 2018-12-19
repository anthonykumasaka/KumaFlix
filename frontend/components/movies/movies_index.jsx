import React from 'react'; 
import NavbarContainer from '../navbar/navbar_container'; 
import FeaturedMovie from './featured_movie'; 
import AllMovies from './all_movies'; 
import { genreSelector } from '../../reducers/selectors';
import PopularMovies from './popular_movies'; 

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
            {<NavbarContainer />}
          </div>
            <FeaturedMovie video={mainMovie} /> 
            <AllMovies 
            performanceVideos={genreSelector(this.props.movies, 'performance')}
            musicVideos={genreSelector(this.props.movies, 'Music Video')}
            animationVideos={genreSelector(this.props.movies, 'animation')}
            movies={this.props.movies} />
        </div>
      </div>
    );
  }

}

export default MoviesIndex; 
