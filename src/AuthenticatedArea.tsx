import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserType from 'UserType';

const AuthenticatedArea = ({ user }: UserType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      navigate('/home');
    } else {
      navigate('/signin');
    }
  }, [user, dispatch, navigate]);
  return (
    <div>
      Test
    </div>
  );
};
export default AuthenticatedArea;
