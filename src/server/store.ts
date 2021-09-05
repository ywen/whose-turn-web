import firebase from 'firebase/app';
import 'firebase/firestore';
import { v4 as uuid } from 'uuid';

import currentUser from './currentUser';
import KidType from 'commons/KidType';
import ChoreType from 'commons/ChoreType';

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
const choresStore = () => toDoc({ name: 'chores' });

const getKey = () => keyStore()?.get();

type SaveToParams = { doc: Function, data: any };
const saveTo = async ({ doc, data }: SaveToParams) => {
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
const saveChore = async (chore: ChoreType) => {
  await saveTo({ doc: choresStore, data: chore });
}

interface KeyParams {
  key: string;
};

const setKey = ({ key } : KeyParams ) => keyStore()?.set({ key });

const publicMethods = {
  getKey,
  setKey,
  saveKid,
  saveChore,
  kidsStore,
  choresStore,
};

export default publicMethods;
