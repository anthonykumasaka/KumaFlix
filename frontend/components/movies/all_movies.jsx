import React from 'react';
import MovieIndexItem from './movie_index_item';
import PopularMovies from './popular_movies';
import MovieInfo from './movie_info'; 
import Splash from '../splash'; 


class AllMovies extends React.Component {
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


  render() {
    
    let musicVideos = this.props.musicVideos.map(movie => {
      return <MovieIndexItem setDropDown={this.setDropDown('mid')} movie={movie} key={movie.title} />;
    });
    let performanceVideos = this.props.performanceVideos.map(movie => {
      return <MovieIndexItem setDropDown={this.setDropDown('pid')} movie={movie} key={movie.title} />;
    });
    let animationVideos = this.props.animationVideos.map(movie => {
      return <MovieIndexItem setDropDown={this.setDropDown('aid')} movie={movie} key={movie.title} />;
    });
    let miscellaneousVideos = this.props.miscellaneousVideos.map(movie => {
      return <MovieIndexItem setDropDown={this.setDropDown('xid')} movie={movie} key={movie.title} />;
    });
    return (
      <div>
        
          <div className="row">
            <div className="rows-titles">
              <h1 id="music" className="music-videos-title">Music Videos</h1>
              {/* <h1 id="performance" className="performance-videos-title">Performance Videos</h1> */}
              {/* <h1 id="animation" className="animation-videos-title">Animation Videos</h1> */}
              {/* <h1 id="miscallaneous" className="miscellaneous-videos-title">Miscellaneous Videos</h1> */}
            </div>
            <div className="row__inner">

              <div className="music-videos">
                {musicVideos}
              </div>
              <MovieInfo movies={this.props.movies} id={this.state.mid}/> 
          
              <h1 id="performance" className="performance-videos-title">Performance Videos</h1>

              <div className="performance-videos"> 
                {performanceVideos}
              </div>
              <MovieInfo movies={this.props.movies} id={this.state.pid}/> 

              <h1 id="animation" className="animation-videos-title">Animation Videos</h1>

              
              <div className="animation-videos"> 
                {animationVideos}
              </div>
              <MovieInfo movies={this.props.movies} id={this.state.aid}/> 

              <h1 id="miscallaneous" className="miscellaneous-videos-title">Miscellaneous Videos</h1>

              <div className="miscellaneous-videos"> 
                {miscellaneousVideos}
              </div>
              <MovieInfo movies={this.props.movies} id={this.state.xid}/> 

            </div>
          </div>

          <footer>
            <div className="social-media-icons">
              <a href="https://www.facebook.com/anthony.kumasaka"><i  className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/anthonykumasaka/?hl=en"><i class="fab fa-instagram"></i></a>
              <a href="https://www.instagram.com/anthonykumasaka/?hl=en"><i class="fab fa-github"></i></a>

            </div>
            
          </footer>

      </div>
    );
  }
}

export default AllMovies;

