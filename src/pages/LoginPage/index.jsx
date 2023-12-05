import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import { actUserLoginAsync } from '../../store/user/actions';
import './login.css';
import { useState } from 'react';

function LoginPage(props) {
  const form = useForm();
  const { register, watch, handleSubmit, formState } = form;
  const { errors } = formState;
  const dispatch = useDispatch();
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  const arrErrors = Object.values(errors);

  function onSubmit(data) {
    dispatch(actUserLoginAsync(data)).then((res) => {
      if (res.ok) {
        navigate('/');
      } else {
        setFormError(res.message);
      }
    });
  }

  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Login</h1>
            <div className="form-login-register">
              {formError && <p className="form-error">{formError}</p>}
              {arrErrors.length > 0 &&
                arrErrors.map((item, index) => (
                  <p key={index} className="form-error">
                    {item.message}
                  </p>
                ))}
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  label="Username"
                  type="text"
                  name="username"
                  placeholder="Enter Username ..."
                  register={register('username', {
                    required: 'Username: không được để trống',
                    maxLength: {
                      value: 6,
                      message: 'Username: tối đa có 6 ký tự',
                    },
                  })}
                />
                <Input
                  label="Password"
                  type="password"
                  name="password"
                  placeholder="Enter Password ..."
                  register={register('password', {
                    required: 'Password: Không được để trống',
                    minLength: {
                      value: 6,
                      message: 'Password: Tối thiểu có 6 ký tự',
                    },
                  })}
                />

                {/* <div>
                  <input
                    {...register('username', {
                      required: 'không được để trống',
                      maxLength: {
                        value: 6,
                        message: 'độ dài tối đa là 6',
                      },
                    })}
                  />

                  {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
                </div>
                <div>
                  <input
                    {...register('password', {
                      required: 'không được để trống',
                      minLength: {
                        value: 6,
                        message: 'tối thiểu phải có 6 ký tự',
                      },
                    })}
                  />

                  {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                </div> */}
                {/* <Input
                  name="example"
                  label="Example"
                  type="email"
                  placeholder="Enter Example ..."
                  register={register('example', {
                    required: 'không được để trống',
                  })}
                /> */}
                {/* {errors.example && <p style={{ color: 'red' }}>{errors.example.message}</p>} */}
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
