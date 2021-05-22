import firebase from 'firebase/app';
import 'firebase/firestore';

import currentUser from './currentUser';

const db = () => firebase.firestore();
const collection = () => {
  const userId = currentUser()?.uid;
  if (userId) {
    return db().collection(userId);
  }
  return null;
};

interface ToDocParams {
  name: string;
};

const toDoc = ({ name }: ToDocParams) => collection()?.doc(name);
const keyStore = () => toDoc({ name: 'key '});

const getKey = () => keyStore()?.get();

interface KeyParams {
  key: string;
};

const setKey = ({ key } : KeyParams ) => keyStore()?.set({ key });

const publicMethods = {
  getKey,
  setKey,
};

export default publicMethods;
