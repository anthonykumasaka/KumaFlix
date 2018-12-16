import React from 'react'; 
import Navbar from '../navbar/navbar'; 

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout(); 
  }

  componentDidMount() {
    this.props.fetchMovies(); 
  }

  render() { 
    if (this.props.movies.length === 0) return null;

    return (
      <div className="movies-index-bg">
        <div>
          <div>
            {<Navbar />}
          </div>
     
          <h1>This is movies index Component</h1>
          
        </div>
      </div>
    );
  }

}

export default MoviesIndex; 
