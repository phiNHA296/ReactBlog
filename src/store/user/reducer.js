import { ACT_USER_FETCH_ME, ACT_USER_LOGOUT } from './actions';

const initialState = {
  token: localStorage.getItem('ACCESS_TOKEN'),
  currentUser: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_USER_FETCH_ME:
      return {
        ...state,
        ...action.payload,
      };
    case ACT_USER_LOGOUT:
      localStorage.removeItem('ACCESS_TOKEN');
      return {
        ...state,
        token: null,
        currentUser: null,
      };
    default:
      return state;
  }
}

export default userReducer;
