import commentService from '../../services/commentService';

export const ACT_FETCH_PARENT_COMMENTS = 'ACT_FETCH_PARENT_COMMENTS';
export const ACT_FETCH_CHILD_COMMENTS = 'ACT_FETCH_CHILD_COMMENTS';
export const ACT_ADD_PARENT_COMMENT = 'ACT_ADD_PARENT_COMMENT';
export const ACT_ADD_CHILD_COMMENT = 'ACT_ADD_CHILD_COMMENT';

export function actFetchParentComment(data) {
  return {
    type: ACT_FETCH_PARENT_COMMENTS,
    payload: data,
  };
}

export function actFetchChildComment(data) {
  return {
    type: ACT_FETCH_CHILD_COMMENTS,
    payload: data,
  };
}

export function actAddParentComment(data) {
  return {
    type: ACT_ADD_PARENT_COMMENT,
    payload: data,
  };
}
export function actAddChildComment(data) {
  return {
    type: ACT_ADD_CHILD_COMMENT,
    payload: data,
  };
}

export function actFetchPagingCommentAsync(params = { page: 1 }) {
  return async (dispatch) => {
    const response = await commentService.getPaging(params);
    const totalPage = parseInt(response.headers['x-wp-totalpages']);
    const total = parseInt(response.headers['x-wp-total']);
    const list = response.data;
    const data = { list, totalPage, currentPage: params.page, total };
    if (params.parent) {
      dispatch(actFetchChildComment(data));
    } else {
      dispatch(actFetchParentComment(data));
    }
  };
}

export function actAddCommentAsync(data) {
  return async (dispatch) => {
    const response = await commentService.postComment(data);

    if (data.parent) {
      dispatch(actAddChildComment(response.data));
    } else {
      dispatch(actAddParentComment(response.data));
    }
  };
}
