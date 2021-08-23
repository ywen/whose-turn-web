import firebase from 'firebase/app';
import 'firebase/firestore';
import { v4 as uuid } from 'uuid';

import currentUser from './currentUser';
import KidType from 'commons/KidType';

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

const kidsStore = () => toDoc({ name: 'kids' });

const getKey = () => keyStore()?.get();

type SaveToParams = { doc: Function, data: any };
const saveTo = async ({ doc, data }: SaveToParams) => {
  console.log(currentUser()?.uid);
  const snapshot = await doc().get();
  if (!snapshot.exists) {
    await doc().set({});
  }
  const newData = { ...data };
  newData.id = data.id ? data.id : uuid();
  await doc().update({
    [newData.id]: newData,
  });
};

const saveKid = async (kid: KidType) => {
  await saveTo({ doc: kidsStore, data: kid });
}

interface KeyParams {
  key: string;
};

const setKey = ({ key } : KeyParams ) => keyStore()?.set({ key });

const publicMethods = {
  getKey,
  setKey,
  saveKid,
};

export default publicMethods;
