import { Dispatch } from 'redux';
import { NavigateFunction } from "react-router";
import SignupData from './SignupData';
import auth from '../server/auth';
import setEncryptionKey from '../encryption/setEncryptionKey';

interface Params {
  dispatch: Dispatch;
  data: SignupData;
  navigate: NavigateFunction,
};

const create = ({ data, dispatch, navigate }: Params) => {
  const { email, password } = data;
  auth().createUserWithEmailAndPassword(email, password).then(user => {
    setEncryptionKey({ dispatch, password });
    navigate('/');
  });
}

export default create;
