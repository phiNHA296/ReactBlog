import { mappingMenuData } from '../../helpers';
import menuService from '../../services/menuService';

export const ACT_FETCH_MENUS = 'ACT_FETCH_MENUS';

export function actFetchMenus(data) {
  return {
    type: ACT_FETCH_MENUS,
    payload: data,
  };
}

export function actFetchMenusAsync() {
  return async (dispatch) => {
    const response = await menuService.getAll();
    const data = response.data.items.map(mappingMenuData);
    dispatch(actFetchMenus(data));
  };
}
