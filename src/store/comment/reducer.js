import {
  ACT_ADD_CHILD_COMMENT,
  ACT_ADD_PARENT_COMMENT,
  ACT_FETCH_CHILD_COMMENTS,
  ACT_FETCH_PARENT_COMMENTS,
} from './actions';

const initialState = {
  dataParentComments: {
    list: [],
    totalPage: 0,
    total: 0,
    currentPage: 1,
  },
  // dataChildComments: [],
  dataChildComments: {
    // 123: {
    //   list: [],
    //   totalPage: 0,
    //   total: 0,
    //   currentPage: 1,
    // },
    // 456: []
  },
};

function commentReducer(state = initialState, action) {
  switch (action.type) {
    case ACT_FETCH_PARENT_COMMENTS: {
      const payload = action.payload;
      const { list, currentPage } = payload;
      const dataParentCommentsOld = state.dataParentComments;
      return {
        ...state,
        dataParentComments: {
          ...dataParentCommentsOld,
          ...payload,
          list: currentPage === 1 ? list : [...dataParentCommentsOld.list, ...list],
        },
      };
    }
    case ACT_ADD_PARENT_COMMENT:
      return {
        ...state,
        dataParentComments: {
          ...state.dataParentComments,
          list: [action.payload, ...state.dataParentComments.list],
        },
      };
    case ACT_ADD_CHILD_COMMENT: {
      const payload = action.payload;
      const parentId = payload.parent;
      const dataChildCommentsOld = state.dataChildComments;
      return {
        ...state,
        dataChildComments: {
          ...dataChildCommentsOld,
          [parentId]: [payload, ...(dataChildCommentsOld[parentId] || [])],
        },
      };
    }
    case ACT_FETCH_CHILD_COMMENTS: {
      const payload = action.payload;
      const { list, currentPage } = payload;
      const parentId = list[0].parent;
      const dataChildCommentsOld = state.dataChildComments;

      return {
        ...state,
        dataChildComments: {
          ...dataChildCommentsOld,
          [parentId]: {
            ...(dataChildCommentsOld[parentId] || {}),
            ...payload,
            list: currentPage === 1 ? list : [...dataChildCommentsOld[parentId].list, ...list],
          },
        },
      };
    }
    default:
      return state;
  }
}

export default commentReducer;
