import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS  = 'CLEAR_ERRORS'; 

export const clearErrors = () => ({
  type: CLEAR_ERRORS
}); 

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user2 => (
    dispatch(receiveCurrentUser(user2))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user3 => (
    dispatch(receiveCurrentUser(user3))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
);
