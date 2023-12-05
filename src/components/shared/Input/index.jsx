import './input.css';
import cls from 'classnames';
import { useState } from 'react';
import IconSearch from '../IconSearch';

// const obj = {
//   abc:123,
//   xyz: 345,
//   qqq: 1,
//   yyyy: 2
// }
// // restructing
// // rest operator -> gom
// const {abc, xyz, ...restProps} = obj;

// // spread operator -> copy object -> phân rã, copy
// const obj1 = {...restProps};

function Input({ label, type = 'text', className, icon = <IconSearch />, register = {}, ...restProps }) {
  const [localType, setLocalType] = useState(type);

  function handleToggleShowPwd() {
    if (localType === 'password') {
      setLocalType('text');
    } else if (localType === 'text') {
      setLocalType('password');
    }
  }

  const classesIconPwd = cls('toggle-password', {
    'ion-eye': localType === 'password',
    'ion-eye-disabled': localType === 'text',
  });
  const classesSearch = cls('input-search__input', className);

  if (type === 'search') {
    return (
      <div className="input-search">
        {icon}
        <input className={classesSearch} type={localType} {...register} {...restProps} />
      </div>
    );
  }

  return (
    <div className="form-control">
      {label && <label>{label}</label>}
      {type === 'password' && <i className={classesIconPwd} onClick={handleToggleShowPwd}></i>}
      <input type={localType} className={className} {...register} {...restProps} />
    </div>
  );
}

export default Input;
