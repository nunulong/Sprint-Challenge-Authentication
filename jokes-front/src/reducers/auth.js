import {
  USER_AUTHENTICATED,
  USER_UNAUTHENTICATED,
  AUTHENTICATED_ERROR
} from '../actions';

export default (auth = {}, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return { ...auth, authenticated: true };
    case USER_UNAUTHENTICATED:
      return { ...auth, authenticated: false };
    case AUTHENTICATED_ERROR:
      return { ...auth, error: action.payload };
    default:
      return auth;
  }
};