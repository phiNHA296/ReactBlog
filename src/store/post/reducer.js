import {
  ACT_FETCH_POSTS_BY_CATEGORY,
  ACT_FETCH_POSTS_GENERAL,
  ACT_FETCH_POSTS_LATEST,
  ACT_FETCH_POSTS_PAGING,
  ACT_FETCH_POSTS_POPULAR,
  ACT_FETCH_POSTS_SEARCH,
  ACT_FETCH_POST_DETAIL,
} from './actions';

const initialState = {
  postsLatest: [],
  postsPopular: [],
  postsGeneral: {
    list: [],
    currentPage: 1,
    totalPage: 0,
  },
  postsPaging: {
    list: [],
    currentPage: 1,
    totalPage: 0,
    total: 0,
  },
  postsSearch: {
    list: [],
    currentPage: 1,
    totalPage: 0,
    total: 0,
  },
  postsByCategory: {
    list: [],
    currentPage: 1,
    totalPage: 0,
  },
  postDetail: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACT_FETCH_POSTS_LATEST:
      return {
        ...state,
        postsLatest: action.payload,
      };
    case ACT_FETCH_POSTS_POPULAR:
      return {
        ...state,
        postsPopular: action.payload,
      };
    case ACT_FETCH_POSTS_GENERAL:
      const payload = action.payload;
      const newList = action.payload.currentPage === 1 ? payload.list : [...state.postsGeneral.list, ...payload.list];

      return {
        ...state,
        postsGeneral: {
          ...state.postsGeneral,
          ...payload,
          list: newList,
        },
      };
    case ACT_FETCH_POSTS_SEARCH:
      return {
        ...state,
        postsSearch: {
          ...state.postsSearch,
          ...action.payload,
          list:
            action.payload.currentPage === 1
              ? action.payload.list
              : [...state.postsSearch.list, ...action.payload.list],
        },
      };
    case ACT_FETCH_POSTS_PAGING:
      return {
        ...state,
        postsPaging: {
          ...state.postsPaging,
          ...action.payload,
          list:
            action.payload.currentPage === 1
              ? action.payload.list
              : [...state.postsPaging.list, ...action.payload.list],
        },
      };
    case ACT_FETCH_POSTS_BY_CATEGORY:
      return {
        ...state,
        postsByCategory: {
          ...state.postsByCategory,
          ...action.payload,
          list:
            action.payload.currentPage === 1
              ? action.payload.list
              : [...state.postsByCategory.list, ...action.payload.list],
        },
      };
    case ACT_FETCH_POST_DETAIL:
      return {
        ...state,
        postDetail: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
