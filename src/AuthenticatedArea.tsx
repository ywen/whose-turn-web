import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import UserType from 'UserType';
import Menu from 'Menu';
import listenToData from 'server/listenToData';
import './AuthenticatedArea.scss';

const AuthenticatedArea = ({ user }: UserType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate('/signin');
    } else {
      listenToData({ dispatch });
      navigate('/home');
    }
  }, [user, dispatch, navigate]);
  return (
    <div>
      <header className='header'>
        <Menu />
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default AuthenticatedArea;
