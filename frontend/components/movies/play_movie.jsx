import React from 'react';

class PlayMovie extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  render() {
    if (this.props.movie === undefined) return null;

    return (
      <div>
        <div className="video-player">
          <video src={this.props.movie.video} autoPlay="autoPlay" controls />
        </div>
      </div>
    );
  }
}

export default PlayMovie;