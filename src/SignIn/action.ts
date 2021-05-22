import auth from '../server/auth';

import setEncryptionKey from '../encryption/setEncryptionKey';

interface Params {
  navigate: Function;
  dispatch: Function;
  data: {
    email: string;
    password: string;
  };
}

const action = ({ navigate, dispatch, data }: Params) => {
  const { email, password } = data;
  auth().signInWithEmailAndPassword(email, password).then((user) => {
    setEncryptionKey({ dispatch, password });
    navigate('/');
  }).catch((error) => {
    console.error(error);
  });
}

export default action;
