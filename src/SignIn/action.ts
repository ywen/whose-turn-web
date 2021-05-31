import auth from '../server/auth';

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
    navigate('/');
  }).catch((error) => {
    console.error(error);
  });
}

export default action;
