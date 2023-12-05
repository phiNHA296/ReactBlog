import userService from '../../services/userService';

// export const ACT_USER_LOGIN = 'ACT_USER_LOGIN';
export const ACT_USER_FETCH_ME = 'ACT_USER_FETCH_ME';
export const ACT_USER_LOGOUT = 'ACT_USER_LOGOUT';

// export function actUserLogin(data) {
//   return {
//     type: ACT_USER_LOGIN,
//     payload: data,
//   };
// }

export function actUserFetchMe(data) {
  return {
    type: ACT_USER_FETCH_ME,
    payload: data,
  };
}

export function actUserLogout() {
  return {
    type: ACT_USER_LOGOUT,
  };
}

export function actUserLoginAsync(data) {
  return async (dispatch) => {
    try {
      const response = await userService.login(data);
      const token = response.data.token;
      localStorage.setItem('ACCESS_TOKEN', token);

      dispatch(actUserFetchMeAsync(token));
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        message: 'Thông tin đăng nhập không đúng, vui lòng thử lại',
      };
    }
  };
}

export function actUserRegisterAsync(data) {
  return async (dispatch) => {
    try {
      const response = await userService.register(data);

      dispatch(actUserLoginAsync({ username: data.username, password: data.password }));
      return {
        ok: true,
      };
    } catch (error) {
      return {
        ok: false,
        message: error.response.data.message,
      };
    }
  };
}

export function actUserFetchMeAsync(token) {
  return async (dispatch) => {
    try {
      if (!token) token = localStorage.getItem('ACCESS_TOKEN');

      const responseMe = await userService.fetchMe(token);
      const currentUser = responseMe.data;

      dispatch(actUserFetchMe({ currentUser, token }));
    } catch (error) {
      dispatch(actUserLogout());
    }
  };
}
