import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import { actUserRegisterAsync } from '../store/user/actions';
import './LoginPage/login.css';

const schema = yup
  .object({
    email: yup.string().required('Email bắt buộc nhập').email('Email không đúng định dạng'),
    username: yup
      .string()
      .required('Username bắt buộc nhập')
      .min(3, 'Username phải có tối thiếu 3 ký tự')
      .matches(
        /^([a-z][a-z0-9_]*)$/g,
        'Username chỉ cho phép ký tự a-z, 0-9, gạch chân (_) và phải bắt đầu bắt ký tự a-z'
      ),
    password: yup.string().required('Password bắt buộc nhập').min(6, 'Password phải có tối thiếu 6 ký tự'),
  })
  .required();

function RegisterPage(props) {
  // const form = useForm({
  //   resolver: yupResolver(schema),
  // });
  const form = useForm();
  const { register, watch, formState, handleSubmit } = form;
  const { errors } = formState;
  const dispatch = useDispatch();
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  const arrErrors = Object.values(errors);

  function onSubmit(data) {
    dispatch(actUserRegisterAsync(data)).then((res) => {
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
            <h1 className="form-title text-center">Register</h1>
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
                  label="Nickname"
                  name="nickname"
                  type="text"
                  placeholder="Enter Nickname ..."
                  register={register('nickname')}
                />
                <Input
                  label="Email"
                  name="email"
                  type="text"
                  placeholder="Enter Email ..."
                  register={register('email')}
                />
                <Input
                  label="Username"
                  name="username"
                  type="text"
                  placeholder="Enter Username ..."
                  register={register('username')}
                />
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter Password ..."
                  register={register('password')}
                />
                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large" htmlType="submit">
                    Submit
                  </Button>
                  <Link to="/login">Login</Link>
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

export default RegisterPage;
