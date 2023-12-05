import { mappingPostData } from '../../helpers';
import categoryService from '../../services/categoryService';
import postService from '../../services/postService';
import { actFetchPagingCommentAsync } from '../comment/actions';

// actions type
export const ACT_FETCH_POSTS_LATEST = 'ACT_FETCH_POSTS_LATEST';
export const ACT_FETCH_POSTS_POPULAR = 'ACT_FETCH_POSTS_POPULAR';
export const ACT_FETCH_POSTS_GENERAL = 'ACT_FETCH_POSTS_GENERAL';
export const ACT_FETCH_POSTS_SEARCH = 'ACT_FETCH_POSTS_SEARCH';
export const ACT_FETCH_POSTS_PAGING = 'ACT_FETCH_POSTS_PAGING';
export const ACT_FETCH_POSTS_BY_CATEGORY = 'ACT_FETCH_POSTS_BY_CATEGORY';
export const ACT_FETCH_POST_DETAIL = 'ACT_FETCH_POST_DETAIL';

// actions creator
export function actFetchPostsLatest(data) {
  return {
    type: ACT_FETCH_POSTS_LATEST,
    payload: data,
  };
}

export function actFetchPostsPopular(data) {
  return {
    type: ACT_FETCH_POSTS_POPULAR,
    payload: data,
  };
}

export function actFetchPostsGeneral(data) {
  return {
    type: ACT_FETCH_POSTS_GENERAL,
    payload: data,
  };
}

export function actFetchPostsSearch(data) {
  return {
    type: ACT_FETCH_POSTS_SEARCH,
    payload: data,
  };
}

export function actFetchPostsPaging(data) {
  return {
    type: ACT_FETCH_POSTS_PAGING,
    payload: data,
  };
}

export function actFetchPostsByCategory(data) {
  return {
    type: ACT_FETCH_POSTS_BY_CATEGORY,
    payload: data,
  };
}

export function actFetchPostDetail(data) {
  return {
    type: ACT_FETCH_POST_DETAIL,
    payload: data,
  };
}

// actions async
export function actFetchPostsLatestAsync() {
  return async (dispatch) => {
    const response = await postService.getLatest();
    const data = response.data.map(mappingPostData);

    dispatch(actFetchPostsLatest(data));
  };
}

export function actFetchPostsPopularAsync() {
  return async (dispatch) => {
    const response = await postService.getPopular();
    const data = response.data.map(mappingPostData);
    dispatch(actFetchPostsPopular(data));
  };
}

export function actFetchPostsGeneralAsync(params = { page: 1 }) {
  return async (dispatch) => {
    const response = await postService.getGeneral(params);
    const totalPage = parseInt(response.headers['x-wp-totalpages']);
    const list = response.data.map(mappingPostData);
    const data = { list, totalPage, currentPage: params.page };
    dispatch(actFetchPostsGeneral(data));
  };
}

export function actFetchPostsSearchAsync(params = { search: null, page: 1 }) {
  return async (dispatch) => {
    const response = await postService.getSearch(params);
    const totalPage = parseInt(response.headers['x-wp-totalpages']);
    const total = parseInt(response.headers['x-wp-total']);
    const list = response.data.map(mappingPostData);
    const data = { list, totalPage, currentPage: params.page, total };
    dispatch(actFetchPostsSearch(data));
  };
}

export function actFetchPostsPagingAsync(params = { page: 1 }) {
  return async (dispatch) => {
    const response = await postService.getPaging(params);
    const totalPage = parseInt(response.headers['x-wp-totalpages']);
    const total = parseInt(response.headers['x-wp-total']);
    const list = response.data.map(mappingPostData);
    const data = { list, totalPage, currentPage: params.page, total };
    dispatch(actFetchPostsPaging(data));
  };
}

export function actFetchPostsByCategoryAsync(slug, page = 1) {
  return async (dispatch) => {
    const categoryResponse = await categoryService.getDetail(slug);
    const id = categoryResponse.data[0].id;

    const postResponse = await postService.getByCategory(id, page);
    const totalPage = parseInt(postResponse.headers['x-wp-totalpages']);
    const list = postResponse.data.map(mappingPostData);
    const data = { list, totalPage, currentPage: page };

    dispatch(actFetchPostsByCategory(data));
  };
}

export function actFetchPostDetailAsync(slug) {
  return async (dispatch) => {
    const response = await postService.getDetail(slug);
    const postDetail = mappingPostData(response.data[0]);
    dispatch(actFetchPostDetail(postDetail));
    dispatch(actFetchPagingCommentAsync({ post: postDetail.id, page: 1 }));
  };
}

// khai báo action type
// khai báo action creator
// khai báo action async
// gọi api lấy bài viết -> postService -> getDetail(slug)
// có dữ liệu rồi -> dispatch action creator
