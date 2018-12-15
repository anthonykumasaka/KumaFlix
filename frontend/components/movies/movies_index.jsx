import React from 'react'; 
import Navbar from '../navbar/navbar'; 

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {

    return (
      <div>
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
