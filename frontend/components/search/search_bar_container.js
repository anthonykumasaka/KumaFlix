import { connect } from 'react-redux';
import Searchbar from './searchbar';
import { withRouter } from 'react-router-dom';


const mstp = (state) => {
  return ({

  });
};


const mdtp = (dispatch) => {
  return ({

  });
};

export default withRouter(connect(mstp, mdtp)(Searchbar));