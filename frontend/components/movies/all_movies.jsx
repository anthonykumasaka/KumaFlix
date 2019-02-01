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
              <h1 className="music-videos-title">Music Videos</h1>
              <h1 className="performance-videos-title">Performance Videos</h1>
              <h1 className="animation-videos-title">Animation Videos</h1>
              <h1 className="miscellaneous-videos-title">Miscellaneous Videos</h1>
              
              {/* <article id="portfolio"> Portolio </article> */}
            </div>
            <div className="row__inner">

              <div className="music-videos">
                {musicVideos}
              </div>
              <MovieInfo movies={this.props.movies} id={this.state.mid}/> 

              <div className="performance-videos"> 
                {performanceVideos}
              </div>
              <MovieInfo movies={this.props.movies} id={this.state.pid}/> 
              
              <div className="animation-videos"> 
                {animationVideos}
              </div>
              <MovieInfo movies={this.props.movies} id={this.state.aid}/> 

              <div className="miscellaneous-videos"> 
                {miscellaneousVideos}
              </div>
              <MovieInfo movies={this.props.movies} id={this.state.xid}/> 

            </div>
          </div>
      </div>
    );
  }
}

export default AllMovies;

