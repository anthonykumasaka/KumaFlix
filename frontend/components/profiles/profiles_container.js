import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, logout, loginProfile } from '../../actions/session_actions';
import Profiles from './profiles';



const msp = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(msp, mdp)(Profiles);
