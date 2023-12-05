import API from './api';

const postService = {
  getAll(inputParams = {}) {
    return API.get('/wp/v2/posts', {
      params: {
        page: 1,
        per_page: 3,
        ...inputParams,
        lang: 'vi',
      },
    });
  },
  getLatest() {
    return this.getAll();
  },
  getPopular() {
    return this.getAll({ orderby: 'post_views' });
  },
  getGeneral(params = { page: 1 }) {
    return this.getAll({ per_page: 2, ...params });
  },
  getSearch(params = { search: null, page: 1 }) {
    return this.getAll({ per_page: 1, ...params });
  },
  getPaging(params = { page: 1 }) {
    return this.getAll(params);
  },
  getByCategory(categoryId, page) {
    return this.getAll({ per_page: 1, page, categories: categoryId });
  },
  getDetail(slug) {
    return this.getAll({ slug });
  },
};

export default postService;
