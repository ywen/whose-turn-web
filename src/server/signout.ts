import auth from './auth';

const signout = () => {
  auth().signOut();
};

export default signout;
