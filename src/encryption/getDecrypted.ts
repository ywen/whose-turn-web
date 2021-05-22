import CryptoJS from 'crypto-js';

interface Params {
  key: string;
  value: string;
};

const getDecrypted = ({ key, value }: Params) => {
  return CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);
};

export default getDecrypted;
