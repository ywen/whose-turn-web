import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import './index.scss'
import TextField from 'Components/TextField';

import changeValue from './changeValue';
import action from './action';
import { RootState } from 'store';
import UserType from 'UserType';

const SignIn = ({ user }: UserType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.signInData);
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  });
  return (
    <div className='signin__container'>
      <TextField changeValue={changeValue} data={data} name='email' key='email' />
      <TextField changeValue={changeValue} fieldType='password' data={data} name='password' key='password' />
      <div className='signin__input-container'>
        <button onClick={() => action({dispatch, data, navigate})}>Sign In</button>
      </div>
      <div className='signin__input-container'>
        <Link to='/signup'>Sign up</Link>
      </div>
    </div>
  )
};

export default SignIn;
