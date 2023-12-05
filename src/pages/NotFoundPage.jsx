import React from 'react';
import { Link } from 'react-router-dom';
import IMG_404 from '../assets/images/404.png';
import Button from '../components/shared/Button';

function NotFoundPage(props) {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <div className="main-title main-title__search spacing">
          <div className="text-center">
            <img src={IMG_404} alt="404" style={{ maxWidth: '100%' }} />
          </div>
          <div className="text-center">
            <Link to="/">
              <Button type="primary" size="large">
                Quay lại trang chủ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
