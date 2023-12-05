import categoryService from '../../services/categoryService';

export const ACT_FETCH_CATEGORIES = 'ACT_FETCH_CATEGORIES';

export function actFetchCategories(data) {
  return {
    type: ACT_FETCH_CATEGORIES,
    payload: data,
  };
}

export function actFetchCategoriesAsync() {
  return async (dispatch) => {
    const response = await categoryService.getAll();

    let data = {};
    response.data.forEach((element) => {
      data[element.id] = {
        id: element.id,
        name: element.name,
        slug: element.slug,
      };
    });

    dispatch(actFetchCategories(data));
  };
}
