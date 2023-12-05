import { ACT_FETCH_CATEGORIES } from './actions';

const initialState = {
  list: null,
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_FETCH_CATEGORIES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
}

export default categoryReducer;
