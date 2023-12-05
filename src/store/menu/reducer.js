import { ACT_FETCH_MENUS } from './actions';

const initialState = {
  list: [],
};

function menuReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_FETCH_MENUS:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}

export default menuReducer;
