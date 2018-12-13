import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = state => {
  return {
    errors: state.errors.session,
    formType: 'Sign In',
    navLink: <Link to="/signup">Sign up now</Link>,
  };
};

const mdp = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(msp, mdp)(SessionForm);
