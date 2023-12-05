import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actUserLogout } from '../../store/user/actions';

function renderMenu(item) {
  return (
    <li key={item.id}>
      <a href="/">{item.title}</a>
      {item.childItems.length > 0 && <ul>{item.childItems.map(renderMenu)}</ul>}
    </li>
  );
}

function HeaderMenus() {
  const menus = useSelector((state) => state.MENU.list);
  const { token, currentUser } = useSelector((state) => state.USER);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();

    dispatch(actUserLogout());
    navigate('/');
  }

  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">{menus.map(renderMenu)}</ul>
        <ul className="header-nav__lists">
          {!token && (
            <li className="user">
              <a href="#">
                <i className="icons ion-person" />
                Tài khoản
              </a>
              <ul>
                <li>
                  <Link to="/login">Đăng nhập</Link>
                </li>
                <li>
                  <Link to="/register">Đăng ký</Link>
                </li>
              </ul>
            </li>
          )}
          {token && (
            <li className="user">
              <a href="#">
                <i className="icons ion-person" />
                {currentUser?.name}
              </a>
              <ul>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/change-password">Thay đổi mật khẩu</Link>
                </li>
                <li>
                  <a href="#" onClick={handleLogout}>
                    Đăng xuất
                  </a>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
