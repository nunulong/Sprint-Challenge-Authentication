import axios from 'axios';
axios.defaults.withCredentials = true;
const ROOT_URL = 'http://localhost:5000';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATED_ERROR = 'AUTHENTICATED_ERROR';
export const GET_JOKES = 'GET_JOKES';

export const authError = error => {
  return {
    type: AUTHENTICATED_ERROR,
    payload: error
  }
};

export const register = (username, password, confirmPassword, history) => {
  return dispatch => {
    if (password !== confirmPassword) {
      return dispatch(authError('Passwords Not Match'));
    }
    axios.post(`${ROOT_URL}/api/users`, { username, password })
      .then((response) => {
        window.localStorage.setItem('token', response.data.token);
        dispatch({
          type: USER_REGISTERED
        });
        history.push('/signin');
      })
      .catch((error) => {
        dispatch(authError('Register User Failed'));
      });
  };
};

export const login = (username, password, history) => {
  return dispatch => {
    axios.post(`${ROOT_URL}/api/login`, { username, password })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        dispatch({
          type: USER_AUTHENTICATED
        });
        history.push('/jokes');
      })
      .catch((error) => {
        dispatch(authError('Incorrect username or password'));
      });
  };
};

export const logout = () => {
  return dispatch => {
    dispatch({
      type: USER_UNAUTHENTICATED
    });
    localStorage.removeItem('token');
  };
};

export const getJokes = () => {
  return dispatch => {
    const token = window.localStorage.getItem('token');
    axios.get(`${ROOT_URL}/api/jokes`, {
      headers: { 'Authorization': token }
    })
    .then((response) => {
      dispatch({
        type: GET_JOKES,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch(authError('Fetch Jokes Failed'));
    });
  };
};