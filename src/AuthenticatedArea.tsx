import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserType from 'UserType';
import Menu from 'Menu';

import 'AuthenticatedArea.scss'

const AuthenticatedArea = ({ user }: UserType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate('/signin');
    }
  }, [user, dispatch, navigate]);
  return (
    <div>
      <header className='header'>
        <Menu />
      </header>
    </div>
  );
};
export default AuthenticatedArea;
