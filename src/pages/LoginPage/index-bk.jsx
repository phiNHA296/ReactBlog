import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import './login.css';
import { useDispatch } from 'react-redux';
import { actUserLoginAsync } from '../../store/user/actions';

function LoginPage(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();

  function handleChangeValue(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    dispatch(actUserLoginAsync(formData));
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              <form onSubmit={handleSubmit}>
                <Input
                  label="Username"
                  onChange={handleChangeValue}
                  name="username"
                  type="text"
                  placeholder="Enter Username ..."
                />
                <Input
                  label="Password"
                  onChange={handleChangeValue}
                  name="password"
                  type="password"
                  placeholder="Enter Password ..."
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" htmlType="submit">
                    Submit
                  </Button>
                  <Link to="/register">Regiter</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default LoginPage;
