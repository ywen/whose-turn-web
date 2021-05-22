import store from '../server/store';
import getKey from './getKey';
import getEncrypted from './getEncrypted';
import getDecrypted from './getDecrypted';
import keyStore from './keyStore';

interface Params {
  dispatch: Function;
  password: string;
};

const setEncryptionKey = async ({ dispatch, password }: Params) => {
  const querySnapshot = await store.getKey();
  if (querySnapshot && querySnapshot.exists) {
    const key = getDecrypted({ value: querySnapshot?.data()?.key, key: password });
    keyStore.save({ key });
  } else {
    const key = getKey();
    const encryptedKey = getEncrypted({ key: password, value: key })
    await store.setKey({ key: encryptedKey })
    keyStore.save({ key });
  }
};

export default setEncryptionKey;
